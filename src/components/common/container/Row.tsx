import * as React from "react";
import { StyleSheet, View } from "react-native";
import { rowLayoutH, rowLayoutV } from "../../../constants";

interface IRow {
  layoutH?: rowLayoutH;
  layoutV?: rowLayoutV;
  style?: any;
}
class Row extends React.PureComponent<IRow> {
  public render() {
    const { style, children } = this.props;
    const layout = this.getLayout();
    return <View style={[styles.container, layout, style]}>{children}</View>;
  }
  private getLayout = () => {
    const { layoutH, layoutV } = this.props;
    const { left, right, spaceAround, spaceBetween } = rowLayoutH;
    const { center } = rowLayoutV;
    const layout: any = {};
    switch (layoutH) {
      case left:
        layout.justifyContent = "flex-start";
        break;
      case right:
        layout.justifyContent = "flex-end";
        break;
      case spaceAround:
        layout.justifyContent = "space-around";
        break;
      case spaceBetween:
        layout.justifyContent = "space-between";
        break;
    }
    switch (layoutV) {
      case center:
        layout.alignItems = "center";
        break;
    }
    return layout;
  };
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "stretch",
    justifyContent: "center",
  },
});
export default Row;
