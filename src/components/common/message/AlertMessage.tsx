import * as React from "react";
import { StyleSheet } from "react-native";
import { COLORS, colorSet, SCREEN } from "../../../constants";
import { Button, Link, TextButton } from "../button";
import { Container } from "../container";
import { Divider } from "../divider";
import { Text } from "../text";

interface IAlertMessage {
    title: string;
    message: string;
    onPressOk: () => void;
}
class AlertMessage extends React.PureComponent<IAlertMessage> {
    public render() {
        const { title, message, onPressOk } = this.props;
        return (
            <Container
                fluid
                lightbase
                style={styles.container}>
                <Container fluid style={styles.messageContainer}>
                    <Text color={colorSet.highlight} special style={{ paddingBottom: 10 }}>{title}</Text>
                    <Text color={colorSet.highlight}>{message}</Text>
                </Container>

                <Container fluid >
                    <Divider color={COLORS.shadowGrey} />
                    <Divider color={COLORS.shadowGrey} />
                </Container>
                <Button
                    stretch
                    onPress={onPressOk}>
                    <Container fluid padV style={styles.linkContainer}>
                        <Text color={colorSet.info}>
                            {"ตกลง"}
                        </Text>
                    </Container>
                </Button>
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
});

export default AlertMessage;
