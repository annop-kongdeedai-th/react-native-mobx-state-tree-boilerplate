import * as React from "react";
import { StyleSheet } from "react-native";
import { COLORS, colorSet, rowLayoutH, SCREEN } from "../../../constants";
import { Button, Link, TextButton } from "../button";
import { Container, Row } from "../container";
import { Divider } from "../divider";
import { Text } from "../text";

interface IAlertAceeptOrDeniedMessage {
  title: string;
  message: string;
  onPressAceept: () => void;
  onPressDenied: () => void;
}
class AlertAceeptOrDeniedMessage extends React.PureComponent<
  IAlertAceeptOrDeniedMessage
> {
  public render() {
    const { title, message, onPressAceept, onPressDenied } = this.props;
    return (
      <Container fluid lightbase style={styles.container}>
        <Container fluid style={styles.messageContainer}>
          <Text
            color={colorSet.highlight}
            special
            style={styles.containerStyle}
          >
            {title}
          </Text>
          <Text color={colorSet.highlight}>{message}</Text>
        </Container>

        <Container fluid>
          <Divider color={COLORS.shadowGrey} />
          <Divider color={COLORS.shadowGrey} />
        </Container>
        <Container padV fluid>
          <Row layoutH={rowLayoutH.spaceBetween}>
            <Button onPress={onPressDenied} stretch style={styles.buttonStyle}>
              <Container flex={1} fluid padV>
                <Text color={colorSet.info}>{"ยกเลิก"}</Text>
              </Container>
            </Button>
            <Divider vertical />
            <Button onPress={onPressAceept} stretch style={styles.buttonStyle}>
              <Container flex={1} fluid padV>
                <Text color={colorSet.info}>{"ตกลง"}</Text>
              </Container>
            </Button>
          </Row>
        </Container>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    alignSelf: "auto",
    width: SCREEN.width * 0.8,
  },
  messageContainer: {
    paddingHorizontal: 16,
    paddingVertical: 36,
  },
  linkContainer: {
    paddingHorizontal: 16,
  },
  textStyle: {
    textAlign: "center",
  },
  containerStyle: {
    paddingBottom: 10,
  },
  buttonStyle: {
    flex: 1,
  },
});

export default AlertAceeptOrDeniedMessage;
