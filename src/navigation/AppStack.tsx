import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppStack = createBottomTabNavigator({
  Home: HomeScreen
});



export default AppStack;
