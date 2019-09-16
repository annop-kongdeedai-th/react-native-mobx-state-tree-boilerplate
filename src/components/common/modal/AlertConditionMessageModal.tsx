import * as React from "react";
import { StyleSheet } from "react-native";
import { AlertAceeptOrDeniedMessage } from "../message";
import Modal from "./Modal";

export interface IAlertConditionMessageModal {
  isVisible: boolean;
  title?: string;
  message?: string;
  onPressAceept: () => void;
  onPressDenied: () => void;
  onBackdropPress: () => void;
}
class AlertConditionMessageModal extends React.PureComponent<
  IAlertConditionMessageModal
> {
  public render() {
    const {
      isVisible,
      onBackdropPress,
      onPressAceept,
      onPressDenied,
      title,
      message,
    } = this.props;
    return (
      <Modal
        isVisible={isVisible!}
        onBackdropPress={onBackdropPress}
        style={styles.modalContainer}
      >
        <AlertAceeptOrDeniedMessage
          title={title || ""}
          message={message || ""}
          onPressAceept={onPressAceept}
          onPressDenied={onPressDenied}
        />
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    margin: 0,
  },
});
export default AlertConditionMessageModal;
