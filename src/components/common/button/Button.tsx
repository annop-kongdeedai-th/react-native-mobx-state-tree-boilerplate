import * as React from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";

import { Container } from "..";

export interface IButton {
  onPress?: () => void;
  active?: boolean;
  disabled?: boolean;
  loading?: boolean;
  stretch?: boolean;
  style?: any;
}
class Button extends React.PureComponent<IButton> {
  public static defaultProps = {};
  public render() {
    const { loading, disabled, style, children } = this.props;
    const button = this.getButtonStyle();
    const loadingButton = loading && this.getLoadingStyle();
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={[styles.container, button, loadingButton, style]}
        disabled={disabled || loading}
      >
        {children}
        {loading && this.renderLoading()}
      </TouchableOpacity>
    );
  }
  private renderLoading = () => {
    return (
      <Container style={styles.loading}>
        <ActivityIndicator size="large" />
      </Container>
    );
  };
  private getButtonStyle = () => {
    const { stretch } = this.props;
    const button: any = {};
    if (stretch) {
      button.alignSelf = "stretch";
    }
    return button;
  };
  private getLoadingStyle = () => {
    return { opacity: 0.5 };
  };
  private onPress = () => {
    const { onPress } = this.props;
    if (typeof onPress !== "undefined") {
      onPress();
    }
  };
}
const styles = StyleSheet.create({
  container: {},
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
});
export default Button;
