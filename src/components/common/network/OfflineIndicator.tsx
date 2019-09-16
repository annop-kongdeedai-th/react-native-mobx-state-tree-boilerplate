import * as React from "react";
import NetInfo from "@react-native-community/netinfo";

import { inject, observer } from "mobx-react";
import { Container, Text } from "..";
import { IAppModel } from "../../../AppModel";
import { COLORS, colorSet } from "../../../constants";

interface IOfflineNotice {
  appStore?: IAppModel;
}

class OfflineIndicator extends React.Component<IOfflineNotice> {
  public state = { isConnected: true };
  public componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this.onConnectionChange,
    );
  }
  public componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this.onConnectionChange,
    );
  }
  public render() {
    return this.state.isConnected ? null : this.renderOfflineNotice();
  }
  private renderOfflineNotice = () => (
    <Container padV bg={colorSet.danger}>
      <Text color={COLORS.white}>ไม่ได้เชื่อมต่ออินเตอร์เน็ต...</Text>
    </Container>
  );
  private onConnectionChange = (isConnected: boolean) => {
    const { appStore } = this.props;
    this.setState({ isConnected });
    appStore!.setConnected(isConnected);
  };
}
export default inject("appStore")(observer(OfflineIndicator));

