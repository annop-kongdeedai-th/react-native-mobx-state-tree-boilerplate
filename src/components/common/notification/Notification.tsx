import * as React from "react";
import { StyleSheet } from "react-native";
import ViewOverflow from "react-native-view-overflow";
import { Icon, IText, Text } from "..";
import { COLORS, colorSet, sizeIconSet, sizeSet } from "../../../constants";
import { Container } from "../container";

export interface INotification {
  size?: sizeSet | sizeIconSet;
  color?: colorSet;
  text?: string;
  iconName?: string;
  top?: number;
  right?: number;
}
class Notification extends React.PureComponent<INotification> {
  public render() {
    const { size, color, text, iconName } = this.props;
    const containerStyle = this.getContainerStyle();
    const topPercent = this.getTopStyle();
    const rightPercent = this.getRightStyle();

    return (
      <ViewOverflow
        top={topPercent}
        right={rightPercent}
        zIndex={topPercent || rightPercent ? 300 : 0}
        position={topPercent || rightPercent ? "absolute" : "relative"}
      >
        <Container
          fluid
          bg={color || colorSet.secondary}
          style={[styles.container, containerStyle]}
        >
          {text ? (
            <Text size={size} color={COLORS.white}>
              {text}
            </Text>
          ) : (
            <Icon
              size={size || sizeIconSet.m}
              name={iconName || "question-circle-o"}
              color={COLORS.white}
            />
          )}
        </Container>
      </ViewOverflow>
    );
  }
  private getContainerStyle = () => {
    const { text } = this.props;
    let containerStyle: any = {};
    if (text) {
      if (text!.length > 1) {
        containerStyle.paddingHorizontal = 8;
        containerStyle.width = undefined;
        containerStyle.height = undefined;
      } else {
        containerStyle = this.getSizeContainerStyle();
      }
    } else {
      containerStyle = this.getSizeContainerStyle();
    }

    return containerStyle;
  };
  private getSizeContainerStyle = () => {
    const { size } = this.props;
    const containerStyle: any = {};
    switch (size) {
      case sizeSet.xs:
        containerStyle.borderRadius = sizeSet.xs;
        containerStyle.width = sizeSet.xs * 2;
        containerStyle.height = sizeSet.xs * 2;
        break;
      case sizeSet.s:
        containerStyle.borderRadius = sizeSet.s;
        containerStyle.width = sizeSet.s * 2;
        containerStyle.height = sizeSet.s * 2;
        break;
      case sizeSet.m:
        containerStyle.borderRadius = sizeSet.m;
        containerStyle.width = sizeSet.m * 2;
        containerStyle.height = sizeSet.m * 2;
        break;
      case sizeSet.l:
        containerStyle.borderRadius = sizeSet.l;
        containerStyle.width = sizeSet.l * 2;
        containerStyle.height = sizeSet.l * 2;
        break;
      case sizeSet.xl:
        containerStyle.borderRadius = sizeSet.xl;
        containerStyle.width = sizeSet.xl * 2;
        containerStyle.height = sizeSet.xl * 2;
        break;
    }
    return containerStyle;
  };
  private getTopStyle = () => {
    const { top } = this.props;
    const topPercent = top !== undefined ? `${top}%` : undefined;
    return topPercent;
  };
  private getRightStyle = () => {
    const { right } = this.props;
    const rightPercent = right !== undefined ? `${right}%` : undefined;
    return rightPercent;
  };
}
const styles = StyleSheet.create({
  container: {
    alignSelf: "auto",
    borderRadius: sizeSet.m,
    width: sizeSet.m * 2,
    height: sizeSet.m * 2,
    padding: 4,
    zIndex: 100,
  },
});
export default Notification;
