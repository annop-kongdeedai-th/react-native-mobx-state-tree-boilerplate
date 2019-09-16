import * as React from "react";
import {
  Callout,
  MapEvent,
  Marker as BaseMarker,
  MarkerProps,
} from "react-native-maps";

export interface IMarker extends MarkerProps {
  onPressCallout?: (e: MapEvent, marker: any) => void;
}
class Marker extends React.Component<IMarker> {
  public render() {
    const { coordinate, title, description, children } = this.props;
    return (
      <BaseMarker
        coordinate={coordinate}
        title={title}
        description={description}
      >
        {this.renderCallout(children)}
      </BaseMarker>
    );
  }
  private renderCallout = (children: React.ReactNode) => {
    return (
      <Callout onPress={this.onPressCallout} tooltip={true}>
        {children}
      </Callout>
    );
  };
  private onPressCallout = (e: MapEvent) => {
    const { onPressCallout } = this.props;
    if (typeof onPressCallout !== "undefined") {
      onPressCallout(e, this.props);
    }
  };
}
export default Marker;
