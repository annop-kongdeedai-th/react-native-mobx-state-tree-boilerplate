import { createStackNavigator } from "react-navigation-stack";
import SwitchStack from "./SwitchStack";

const RootStack = createStackNavigator(
  {
    Root: SwitchStack,
  },
  {
    mode: "modal",
    headerMode: "none",
  },
);
export default RootStack;
