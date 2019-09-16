import * as React from "react";
import { StyleSheet, View } from "react-native";
import {
  COLORS,
  colorSet,
  containerLayoutH,
  containerLayoutV,
  SCREEN,
} from "../../../constants";

export interface IContainer {
  layoutH?: containerLayoutH;
  layoutV?: containerLayoutV;
  flex?: number;
  fluid?: boolean;
  lightbase?: boolean;
  padV?: boolean;
  shadow?: boolean;
  bg?: colorSet | string;
  shrink?: boolean;
  style?: any;
}
class Container extends React.PureComponent<IContainer> {
  public render() {
    const { style, children } = this.props;
    const containerStyle = this.getContainerStyle();
    const layout = this.getLayout();
    return (
      <View style={[styles.container, containerStyle, layout, style]}>
        {children}
      </View>
    );
  }
  private getContainerStyle = () => {
    const { flex, fluid, lightbase, padV, bg, shrink, shadow } = this.props;
    let container: any = {};
    if (flex) {
      container.flex = flex;
    }
    if (fluid) {
      container.paddingHorizontal = 0;
    }
    if (lightbase) {
      container.backgroundColor = COLORS.white;
    }
    if (padV) {
      container.paddingVertical = 16;
    }
    if (bg) {
      container.backgroundColor = bg;
    }
    if (shrink) {
      container.alignSelf = "auto"; // for icon frame
    }
    if (shadow) {
      container = { ...container, ...styles.shadow };
    }
    return container;
  };
  private getLayout = () => {
    const { layoutH, layoutV } = this.props;
    const { left, right } = containerLayoutH;
    const { top, bottom, spaceAround, spaceBetween } = containerLayoutV;
    const layout: any = {};
    // for horizontal
    switch (layoutH) {
      case left:
        layout.alignItems = "flex-start";
        // layout.alignSelf = "flex-start";
        break;
      case right:
        layout.alignItems = "flex-end";
        // layout.alignSelf = "flex-end";
        break;
    }
    // for vertical
    switch (layoutV) {
      case top:
        layout.justifyContent = "flex-start";
        break;
      case bottom:
        layout.justifyContent = "flex-end";
        break;
      case spaceAround:
        layout.justifyContent = "space-around";
        break;
      case spaceBetween:
        layout.justifyContent = "space-between";
        break;
    }
    return layout;
  };
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SCREEN.paddingHorizontal,
    justifyContent: "center", // for vertical
    alignItems: "center", // for horizontal,
    alignSelf: "stretch",
    backgroundColor: COLORS.transparent,
  },
  shadow: {
    // borderBottomWidth: 0,
    elevation: 3,
    marginBottom: 0,
    borderColor: COLORS.shadowGrey,
    borderWidth: 1,
  },
});
export default Container;
