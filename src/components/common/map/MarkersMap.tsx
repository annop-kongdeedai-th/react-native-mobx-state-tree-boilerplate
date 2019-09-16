import * as React from "react";
import { LatLng, MapEvent } from "react-native-maps";
import { NavigationScreenProp } from "react-navigation";

import { Map, Markers } from "../../../components/common";

interface IMarkersMap {
  markers: any[];
  navigation: NavigationScreenProp<any>;
  showCurrentLocation: boolean;
  defaultLocation?: boolean;
  region?: LatLng;
  onPressCallout: (e: MapEvent, marker: any) => void;
  onGetLocation: (coords: LatLng) => void;
}
class MarkersMap extends React.Component<IMarkersMap> {
  public render() {
    const {
      markers,
      onPressCallout,
      onGetLocation,
      showCurrentLocation,
      defaultLocation,
      region,
      children,
    } = this.props;
    return (
      <React.Fragment>
        <Map
          silent={true}
          showsUserLocation
          onGetLocation={onGetLocation}
          showCurrentLocation={showCurrentLocation}
          defaultLocation={defaultLocation}
          region={region}
        >
          <Markers markers={markers} onPressCallout={onPressCallout}>
            {children}
          </Markers>
        </Map>
      </React.Fragment>
    );
  }
}
export default MarkersMap;
