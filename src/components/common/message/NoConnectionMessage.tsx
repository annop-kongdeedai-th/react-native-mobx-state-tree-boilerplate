import * as React from "react";
import { StyleSheet } from "react-native";
import { COLORS, IMAGES, sizeSet } from "../../../constants";
import { Container, Row } from "../container";
import { Image } from "../image";
import { Text } from "../text";

interface INoConnectionMessage {
  messageLine1: string;
  messageLine2: string;
}
class NoConnectionMessage extends React.PureComponent<INoConnectionMessage> {
  public render() {
    const { messageLine1, messageLine2 } = this.props;
    return (
      <Container flex={1} style={styles.container} fluid>
        <Image src={IMAGES.notconnected} size={150} />
        <Container padV>
          <Text size={sizeSet.l} style={styles.descriptionText}>
            {messageLine1}
          </Text>
        </Container>
        <Container>
          <Row>
            <Text size={sizeSet.m} style={styles.descriptionText}>
              {messageLine2}
            </Text>
          </Row>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: COLORS.whiteGreyBlack,
    width: "100%",
  },
  descriptionText: {
    textAlign: "center",
  },
});

export default NoConnectionMessage;
