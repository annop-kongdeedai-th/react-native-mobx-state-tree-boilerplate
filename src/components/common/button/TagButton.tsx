import * as React from "react";
import { StyleSheet } from "react-native";
import { Button, Row, Text } from "..";
import {
  COLORS,
  colorSet,
  rowLayoutH,
  rowLayoutV,
  sizeSet,
} from "../../../constants";
import { IButton } from "../button";
import { Container } from "../container";
import { Icon } from "../icon";

interface ITagButton extends IButton {
  title?: string;
  value?: string;
  viewMode?: boolean;
}

class TagButton extends React.PureComponent<ITagButton> {
  public static defaultProps = {};
  public render() {
    const { title, onPress, viewMode } = this.props;
    return (
      <Button disabled={true} style={[styles.buttonStyles]}>
        <Container style={styles.container}>
          <Row layoutH={rowLayoutH.right} layoutV={rowLayoutV.center}>
            <Text size={sizeSet.m} color={COLORS.white}>
              {`${title} `}
            </Text>
            {viewMode ? null : (
              <Button onPress={onPress}>
                <Icon name={"close"} color={COLORS.white} />
              </Button>
            )}
          </Row>
        </Container>
      </Button>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  buttonStyles: {
    borderRadius: 36,
    backgroundColor: colorSet.secondary,
  },
});
export default TagButton;
