import * as React from "react";
import { StyleSheet, Text as BaseText, TextProps } from "react-native";

import { colorSet, sizeIconSet, sizeSet } from "../../../constants";

export interface IText extends TextProps {
  size?: sizeSet;
  color?: colorSet;
  special?: boolean; // special font
}
class Text extends React.PureComponent<IText> {
  public static defaultProps = {
    allowFontScaling: false,
  };
  public render() {
    const { size, color, special, style, children, ...rest } = this.props;
    const textSize = size && this.getTextSize(size);
    const textColor = color && this.getTextColor(color);
    const textFont = (special && this.getFont()) || {};
    return (
      <BaseText
        style={[styles.text, textSize, textColor, textFont, style]}
        {...rest}
      >
        {children}
      </BaseText>
    );
  }
  private getTextSize = (size: sizeSet) => {
    return { fontSize: size };
  };
  private getTextColor = (color: colorSet) => {
    return { color };
  };
  private getFont = () => {
    return { fontFamily: "Kanit-Bold" };
  };
}
const styles = StyleSheet.create({
  text: {
    fontSize: sizeSet.m,
  },
});
export default Text;
