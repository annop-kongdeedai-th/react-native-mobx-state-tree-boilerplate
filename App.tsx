import { Provider } from "mobx-react";
import * as React from "react";
import { YellowBox } from "react-native";
import { createAppContainer } from "react-navigation";

import {
  ErrorBoundary,
  LoadingModal,
  OfflineIndicator,
  Toast,
} from "./src/components/common";
import RootStack from "./src/navigation/RootStack";
import RootStore from "./src/RootStore";
import { navigationService } from "./src/utils";

YellowBox.ignoreWarnings(["Require cycle:", "Remote debugger"]);
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component<{}> {
  public render() {
    return (
      <ErrorBoundary>
        <Provider {...RootStore}>
          <React.Fragment>
            <OfflineIndicator />
            <AppContainer
              ref={(navigatorRef: any) => {
                navigationService.setTopLevelNavigator(navigatorRef);
              }}
            />
            <Toast />
            <LoadingModal />
          </React.Fragment>
        </Provider>
      </ErrorBoundary>
    );
  }
}
