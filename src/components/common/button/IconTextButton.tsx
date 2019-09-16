import * as React from "react";

import { StyleSheet, View } from "react-native";
import { Button as BaseButton, IButton } from ".";
import {
  COLORS,
  colorSet,
  frameSet,
  sizeIconSet,
  sizeSet,
} from "../../../constants";
import { Container } from "../container";
import Icon, { IIcon } from "../icon/Icon";
import { Text } from "../text";

interface IIconTextButton extends IButton, IIcon {
  title?: string;
  sizeIconText?: sizeSet | sizeIconSet;
  active?: boolean;
}

class IconTextButton extends React.PureComponent<IIconTextButton> {
  public static defaultProps = {};
  public render() {
    const { frame } = this.props;
    const { title, name, active, onPress, style } = this.props;

    const textStyle: any = this.getTextStyle();
    const iconStyle: any = this.getIconStyle();
    return (
      <BaseButton onPress={onPress} stretch={false} style={style}>
        <Container fluid>
          <Container
            fluid
            shrink
            style={styles.iconContainer}
          >
            <Icon
              name={name}
              frame={frame}
              size={iconStyle.size}
              color={iconStyle.color}
              paintFrame={active} />
          </Container>
          {title ?
            <Text
              numberOfLines={1}
              color={active ? iconStyle.color : COLORS.grey}
              size={textStyle.fontSize}
              style={styles.textDefaultStyle}
            >
              {title}
            </Text>
            : null}
        </Container>
      </BaseButton>
    );
  }

  private getTextStyle = () => {
    const { size } = this.props;
    const style: any = {};

    style.fontSize = size;

    return style;
  };

  private getIconStyle = () => {
    const { color, sizeIconText } = this.props;
    const style: any = {};
    const _color = color || colorSet.default;

    switch (sizeIconText) {
      case sizeSet.xs:
        style.size = sizeIconSet.s;
        break;
      case sizeSet.s:
        style.size = sizeIconSet.m;
        break;
      case sizeSet.m:
        style.size = sizeIconSet.l;
        break;
      case sizeSet.l:
        style.size = sizeIconSet.xl;
        break;
      case sizeSet.xl:
        style.size = sizeIconSet.xl;
        break;
      default:
        style.size = sizeIconSet.m;
        break;
    }
    style.color = _color;

    return style;
  };
}
const styles = StyleSheet.create({
  container: {},
  textDefaultStyle: {
    paddingTop: 10,
  },
  iconContainer: {
    marginBottom: 3,
  },
  shadow: {
    borderColor: COLORS.white,
    borderBottomWidth: 0,
    elevation: 2,
  },
});
export default IconTextButton;
