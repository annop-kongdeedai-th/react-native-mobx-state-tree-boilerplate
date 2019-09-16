import * as React from "react";
import { StyleSheet } from "react-native";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";

import { Container } from "..";
import { COLORS, colorSet, frameSet, sizeIconSet } from "../../../constants";

export interface IIcon {
  name: string;
  frame?: frameSet;
  paintFrame?: boolean;
  noShadow?: boolean;
  size?: sizeIconSet;
  color?: colorSet;
  style?: any;
}
class Icon extends React.PureComponent<IIcon> {
  public static defaultProps = {};
  public render() {
    const { name, size, color, frame, style } = this.props;
    const iconStyle = frame && this.getIconStyle();
    const containerStyle = frame && this.getContainerStyle();
    return (
      <Container fluid style={[containerStyle, style]} shrink>
        <FontAwesomeIcons
          name={name}
          size={size || sizeIconSet.m}
          color={color || COLORS.grey}
          style={[styles.container, iconStyle]}
        />
      </Container>
    );
  }
  private getIconStyle = () => {
    const { paintFrame } = this.props;
    let style: any = {};
    if (paintFrame) {
      style.color = COLORS.white;
    }
    style = { ...style, ...styles.absolute };
    return style;
  };
  private getContainerStyle = () => {
    const { paintFrame, frame, color, noShadow, size } = this.props;
    let style: any = {};
    style.paddingHorizontal = size || sizeIconSet.m;
    style.paddingVertical = size || sizeIconSet.m;
    switch (frame) {
      case frameSet.circle:
        style.borderRadius = (size || sizeIconSet.m);
        style.backgroundColor = COLORS.white;
        break;
      case frameSet.square:
        style.borderRadius = 8;
        style.backgroundColor = COLORS.white;
        break;
    }
    if (paintFrame) {
      style.backgroundColor = color || COLORS.grey;
    }
    if (!noShadow) {
      style = { ...style, ...styles.shadow };
    }
    return style;
  };
}
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
  },
  absolute: {
    position: "absolute",
    zIndex: 150,
  },
  shadow: {
    borderColor: COLORS.white,
    borderBottomWidth: 0,
    elevation: 2,
  },
});
export default Icon;
