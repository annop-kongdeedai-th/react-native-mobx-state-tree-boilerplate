import { inject, observer } from "mobx-react";
import * as React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";

import { Modal } from ".";
import { IAppModel } from "../../../AppModel";

interface ILoadingModal {
  appStore?: IAppModel;
}

class LoadingModal extends React.Component<ILoadingModal> {
  public render() {
    const { loading, show_indicator } = this.props.appStore!;
    return (
      <Modal isVisible={loading} style={styles.container}>
        {show_indicator ? <ActivityIndicator size="large" /> : null}
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  container: {
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
export default inject("appStore")(observer(LoadingModal));
