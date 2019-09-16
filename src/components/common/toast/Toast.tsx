import { inject, observer } from "mobx-react";
import * as React from "react";
import RootToast from "react-native-root-toast";

import { IAppModel } from "../../../AppModel";
import { COLORS } from "../../../constants";

interface IToast {
  appStore?: IAppModel;
}

class Toast extends React.Component<IToast> {
  public render() {
    const { toast_message } = this.props.appStore!;
    return (
      <RootToast
        visible={toast_message ? true : false}
        position={RootToast.positions.CENTER}
        hideOnPress={true}
        textColor={COLORS.white}
        backgroundColor={COLORS.red}
      >
        {toast_message}
      </RootToast>
    );
  }
}
export default inject("appStore")(observer(Toast));
