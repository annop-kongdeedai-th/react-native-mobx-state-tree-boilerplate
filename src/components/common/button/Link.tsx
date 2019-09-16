import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Row, Text } from "..";
import {
  COLORS,
  colorSet,
  rowLayoutH,
  rowLayoutV,
  sizeSet,
} from "../../../constants";
import { Container } from "../container";
import { IButton } from "./Button";

interface ILink extends IButton {
  size?: sizeSet;
  title?: string;
  color?: colorSet;
  hideUnderline?: boolean;
}

class Link extends React.PureComponent<ILink> {
  public static defaultProps = {};
  public render() {
    const { disabled, title, onPress, size, children, ...rest } = this.props;
    const textStyle = this.getTextStyle();
    return (
      <Button onPress={onPress} style={[styles.container]} disabled={disabled}>
        <Row layoutH={rowLayoutH.right} layoutV={rowLayoutV.center}>
          <Text size={size} style={[styles.text, textStyle]} {...rest}>
            {title}
          </Text>
          {children ? (
            <Container fluid style={styles.childrenContainer}>
              {children}
            </Container>
          ) : null}
        </Row>
      </Button>
    );
  }
  private getTextStyle = () => {
    const { hideUnderline, color } = this.props;
    const text: any = {};
    if (hideUnderline) {
      text.textDecorationLine = "none";
    }
    if (color) {
      text.color = color;
    }
    return text;
  };
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.transparent,
  },
  childrenContainer: {
    paddingLeft: 4,
  },
  text: {
    color: colorSet.primary,
    textDecorationLine: "underline",
  },
});
export default Link;
