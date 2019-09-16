import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";

const AuthStack = createStackNavigator(
  {
    Splash: SplashScreen,
    Login: LoginScreen,
  },
  {
    initialRouteName: "Splash",
  },
);
export default AuthStack;
