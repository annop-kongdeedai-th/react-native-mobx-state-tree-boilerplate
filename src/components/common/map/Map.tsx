import * as React from "react";
import { Dimensions, MapViewProps, StyleSheet } from "react-native";
import MapView, { LatLng, MapEvent, Region } from "react-native-maps";

import { inject, observer } from "mobx-react";
import { Button, Icon } from "..";
import { IAppModel } from "../../../AppModel";
import { frameSet, SCREEN, sizeIconSet } from "../../../constants";
import { errorHandler, getCurrentPosition } from "../../../utils";
import { LoadingMessage } from "../message";

const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const THAILAND_LOCATION = {
  latitude: 13.736717,
  longitude: 100.523186,
  latitudeDelta: LATITUDE_DELTA * 150,
  longitudeDelta: LONGITUDE_DELTA * 150,
};

interface IMap extends MapViewProps {
  scale?: number;
  children?: any;
  showMyLocationButton?: boolean;
  silent?: boolean;
  showCurrentLocation: boolean;
  appStore?: IAppModel;
  defaultLocation?: boolean;
  onCalloutPress?: (e: MapEvent) => void;
  onPressMap?: (coordinate: LatLng) => void;
  onGetLocation?: (coordinate: LatLng) => void;
}

class Map extends React.Component<IMap> {
  public mapView: any;
  public state = {
    region: {
      latitude: THAILAND_LOCATION.latitude,
      longitude: THAILAND_LOCATION.longitude,
      latitudeDelta: THAILAND_LOCATION.latitudeDelta,
      longitudeDelta: THAILAND_LOCATION.longitudeDelta,
    },
    loading: false,
  };
  public async componentDidMount() {
    if (this.props.showCurrentLocation) {
      this.setState({ loading: true });
      try {
        const coords: any = await getCurrentPosition();
        this.setRegion(coords);
      } catch (e) {
        this.setRegion();
        e = this.props.silent ? { name: "999", message: e.message } : e;
        errorHandler(e);
      } finally {
        this.setState({ loading: false });
      }
    }
  }
  public render() {
    const {
      showMyLocationButton,
      showsUserLocation,
      scrollEnabled,
      defaultLocation,
      zoomEnabled,
      style,
      children,
    } = this.props;
    return (
      <React.Fragment>
        {showMyLocationButton ? this.renderMyLocationButton() : null}
        {!this.state.loading ? (
          <MapView
            style={[styles.map, style]}
            region={defaultLocation ? this.state.region : this.getRegion()}
            showsUserLocation={
              this.props.appStore!.isGPSOn ? showsUserLocation : false
            }
            showsMyLocationButton={false}
            // loadingEnabled={true}
            onCalloutPress={this.onCalloutPress}
            onPress={this.onPress}
            ref={(c) => (this.mapView = c)}
            scrollEnabled={scrollEnabled}
            zoomEnabled={zoomEnabled}
          >
            {children}
          </MapView>
        ) : (
          <LoadingMessage
            messageLine1="กำลังค้นหาตำแหน่งปัจจุบัน"
            messageLine2="กรุณารอสักครู่"
          />
        )}
      </React.Fragment>
    );
  }
  private renderMyLocationButton = () => {
    return (
      <Button
        onPress={this.onPressMyLocation}
        style={styles.currentLocationContainer}
      >
        <Icon
          name="crosshairs"
          frame={frameSet.circle}
          size={sizeIconSet.l}
          // color={colorSet.default}
        />
      </Button>
    );
  };
  private onCalloutPress = (e: MapEvent) => {
    const { onCalloutPress } = this.props;
    if (typeof onCalloutPress !== "undefined") {
      onCalloutPress(e);
    }
  };
  private onPress = (e: MapEvent) => {
    const { onPressMap } = this.props;
    if (typeof onPressMap !== "undefined") {
      this.animateMarker(e.nativeEvent.coordinate);
    }
  };
  private animateMarker = (coordinate: LatLng) => {
    if (this.props.scrollEnabled) {
      this.setRegion(coordinate);
    }
    this.animateToRegion(coordinate);
    this.onPressMap(coordinate);
  };
  private animateToRegion = (coordinate: LatLng) => {
    const { latitude, longitude } = coordinate;
    this.mapView.animateToRegion({
      ...this.state.region,
      latitude,
      longitude,
    });
  };
  private onPressMap = (coordinate: LatLng) => {
    const { onPressMap } = this.props;
    if (typeof onPressMap !== "undefined") {
      onPressMap(coordinate);
    }
  };
  private onPressMyLocation = async () => {
    this.setState({ loading: true });
    try {
      const coords: any = await getCurrentPosition();
      this.setRegion(coords);
    } catch (e) {
      e = this.props.silent ? { name: "999", message: e.message } : e;
      errorHandler(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  private setRegion = async (coords?: LatLng) => {
    await this.setState({
      region: {
        ...this.state.region,
        latitude: (coords! && coords!.latitude) || THAILAND_LOCATION.latitude,
        longitude: (coords! && coords!.longitude) || THAILAND_LOCATION.longitude,
      },
    });
    if (coords! && typeof this.props.onGetLocation !== "undefined") {
      this.props.onGetLocation!({
        latitude: coords!.latitude,
        longitude: coords!.longitude,
      });
    }
  };
  private getRegion = (): Region => {
    const { region, appStore, scale, showCurrentLocation } = this.props;
    return {
      latitude:
        region && region.latitude !== null
          ? region.latitude
          : this.state.region.latitude,
      longitude:
        region && region.longitude !== null
          ? region.longitude
          : this.state.region.longitude,
      latitudeDelta:
        appStore!.isGPSOn || !showCurrentLocation
          ? LATITUDE_DELTA * (scale || 1)
          : THAILAND_LOCATION.latitudeDelta,
      longitudeDelta:
        appStore!.isGPSOn || !showCurrentLocation
          ? LONGITUDE_DELTA * (scale || 1)
          : THAILAND_LOCATION.longitudeDelta,
    };
  };
}
const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  currentLocationContainer: {
    zIndex: 100,
    position: "absolute",
    bottom: 32,
    right: SCREEN.paddingHorizontal,
  },
});
export default inject("appStore")(observer(Map));
