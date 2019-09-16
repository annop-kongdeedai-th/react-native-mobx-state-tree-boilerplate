import * as React from "react";
import { StyleSheet } from "react-native";
import BaseModal, { ModalProps } from "react-native-modal";

export interface IModal extends ModalProps {
  bottom?: boolean;
  fluid?: boolean;
  onBackdropPress?: () => void;
}
class Modal extends React.PureComponent<IModal> {
  public render() {
    const { isVisible, children, style } = this.props;
    const modalContainer = this.getLayout();
    return (
      <BaseModal
        isVisible={isVisible}
        onBackdropPress={this.onBackdropPress}
        style={[styles.container, modalContainer, style]}
        // animationOutTiming={600}
      >
        <React.Fragment>{children}</React.Fragment>
      </BaseModal>
    );
  }
  private getLayout = () => {
    const { bottom, fluid } = this.props;
    const modalContainer: any = {};
    if (bottom) {
      modalContainer.justifyContent = "flex-end";
    }
    if (fluid) {
      modalContainer.margin = 0;
    }
    return modalContainer;
  };
  private onBackdropPress = () => {
    const { onBackdropPress } = this.props;
    if (typeof onBackdropPress !== "undefined") {
      onBackdropPress();
    }
  };
}
const styles = StyleSheet.create({
  container: {},
});
export default Modal;
