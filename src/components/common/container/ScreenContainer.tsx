import * as React from "react";
import { RefreshControl, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { Container, IContainer } from ".";
import { COLORS } from "../../../constants";

interface IScreenContainer extends IContainer {
  isRefreshing?: boolean;
  onRefresh?: () => void;
}

class ScreenContainer extends React.PureComponent<IScreenContainer> {
  public state = {
    refreshing: false,
  };

  public render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={styles.keyboardAwareScrollContentContainer}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          this.props.onRefresh ?
            <RefreshControl
              refreshing={this.props.isRefreshing!}
              onRefresh={this.props.onRefresh}
            /> : undefined
        }
      >
        {this.renderContainer()}
      </KeyboardAwareScrollView>
    );
  }
  private renderContainer = () => {
    const { style, children, ...rest } = this.props;
    return (
      <Container
        bg={COLORS.whiteGreyBlack}
        style={[styles.container, style]}
        {...rest}
      >
        {children}
      </Container>
    );
  };
}
const styles = StyleSheet.create({
  keyboardAwareScrollContentContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignSelf: "stretch",
  },
});
export default ScreenContainer;
