import * as React from "react";
import { StyleSheet } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { NavigationScreenProp } from "react-navigation";
import { Container } from "..";
import { colorSet, sizeIconSet } from "../../../constants";
import Button from "./Button";

export interface IIconCloseButton {
  navigation: NavigationScreenProp<any>;
}
class IconCloseButton extends React.PureComponent<IIconCloseButton> {
  public render() {
    return (
      <Container fluid style={[styles.container]}>
        <Button onPress={() => this.props.navigation.pop()}>
          <Feather
            name={"x"}
            size={sizeIconSet.s}
            color={colorSet.highlight}
            style={[styles.container]}
          />
        </Button>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  iconContainer: {
    alignSelf: "center",
  },
});
export default IconCloseButton;
