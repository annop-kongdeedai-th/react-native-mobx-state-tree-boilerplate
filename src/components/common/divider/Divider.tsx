import * as React from "react";
import { StyleSheet, View } from "react-native";

import { COLORS } from "../../../constants";

export interface IDivider {
  vertical?: boolean;
  color?: string;
  style?: any;
}
class Divider extends React.PureComponent<IDivider> {
  public render() {
    const { vertical, color, style } = this.props;
    const dividerStyle: any = {};
    if (vertical) {
      dividerStyle.backgroundColor = color || COLORS.lightGrey;
      dividerStyle.width = 1;
      dividerStyle.borderBottomWidth = 0;
      dividerStyle.flex = null;
    } else if (color) {
      dividerStyle.borderBottomColor = color;
    }
    return <View style={[styles.container, dividerStyle, style]} />;
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1,
  },
});

export default Divider;
