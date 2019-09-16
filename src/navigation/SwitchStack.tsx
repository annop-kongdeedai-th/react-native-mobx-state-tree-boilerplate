import { createSwitchNavigator } from "react-navigation";

import AppStack from "./AppStack";
import AuthStack from "./AuthStack";

const SwitchStack = createSwitchNavigator(
  {
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: "Auth",
  },
);
export default SwitchStack;
