import { createStackNavigator } from "react-navigation-stack";

import LoginScreen from "../screens/LoginScreen";
import SplashScreen from "../screens/SplashScreen";

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
    Splash: SplashScreen,
  },
  {
    initialRouteName: "Login",
  },
);
export default AuthStack;
