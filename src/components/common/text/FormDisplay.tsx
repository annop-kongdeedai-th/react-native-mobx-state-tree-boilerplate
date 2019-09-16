import * as React from "react";
import { StyleSheet } from "react-native";
import { Text } from "..";
import { colorSet, containerLayoutH, sizeSet } from "../../../constants";
import { Container } from "../container";

interface IFormDisplay {
  title?: string;
  value?: string;
}

class FormDisplay extends React.Component<IFormDisplay> {
  public render() {
    const { title, value } = this.props;
    return (
      <Container fluid layoutH={containerLayoutH.left} style={styles.container}>
        <Text size={sizeSet.s} color={colorSet.secondary}>
          {title}
        </Text>
        <Text
          size={sizeSet.m}
          color={colorSet.highlight}
          style={styles.textStyle}
        >
          {value}
        </Text>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  textStyle: {
    paddingVertical: 4,
  },
});
export default FormDisplay;
