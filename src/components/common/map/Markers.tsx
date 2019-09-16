import * as React from "react";
import { MapEvent } from "react-native-maps";

import { IMarker, Marker } from ".";

interface IMarkers {
  markers: any[];
  onPressCallout?: (e: MapEvent, props: any) => void;
}
class Markers extends React.PureComponent<IMarkers> {
  public render() {
    const { markers, children } = this.props;
    return markers.map((marker: any, index: number) => {
      return this.renderMarker(children, marker, index);
    });
  }
  private renderMarker = (children: any, marker: any, index: number) => {
    return (
      children &&
      React.cloneElement(children, {
        key: marker.id || index,
        marker,
        onPressCallout: this.onPressCallout,
      })
    );
  };
  private onPressCallout = (e: MapEvent, marker: any) => {
    const { onPressCallout } = this.props;
    if (typeof onPressCallout !== "undefined") {
      onPressCallout(e, marker);
    }
  };
}
export default Markers;
