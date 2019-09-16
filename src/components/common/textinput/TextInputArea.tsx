import * as React from "react";
import {
  StyleSheet,
  TextInput as BaseTextInput,
  TextInputProps,
} from "react-native";
import { IInput } from ".";
import { sizeSet } from "../../../constants";

interface ITextInputArea extends TextInputProps {
  placeholder?: string;
  value?: string;
  fieldName: string;
  textInputStyle?: any;
  size?: sizeSet;
  heightArea?: number;
  editable?: boolean;
  style?: any;
  setField?: (obj: IInput) => void;
  onFocus?: () => void;
}
class TextInputArea extends React.Component<ITextInputArea> {
  public render() {
    const { value, textInputStyle, editable, onFocus, style, ...rest } = this.props;
    const textStyle = this.getTextStyle();
    const containerStyle = this.getContainerStyle();
    return (
      <BaseTextInput
        onChangeText={this.onChangeText}
        multiline={true}
        value={value}
        editable={editable}
        style={[styles.textInput, containerStyle, textStyle, textInputStyle]}
        onFocus={onFocus}
        {...rest}
      />
    );
  }

  private getTextStyle = () => {
    const { size } = this.props;
    const text: any = {};
    switch (size) {
      case sizeSet.s:
        text.fontSize = sizeSet.s;
        break;
      case sizeSet.m:
        text.fontSize = sizeSet.m;
        break;
      case sizeSet.l:
        text.fontSize = sizeSet.l;
        break;
    }
    return text;
  };

  private getContainerStyle = () => {
    const { heightArea } = this.props;
    const textContainer: any = {};
    if (heightArea) {
      textContainer.height = heightArea;
    }
    return textContainer;
  };

  private onChangeText = (value: string) => {
    const { fieldName, setField } = this.props;
    if (typeof setField !== "undefined") {
      setField({ fieldName, value });
    }
  };
}
const styles = StyleSheet.create({
  textInput: {
    textAlignVertical: "top",
    height: 110,
    justifyContent: "flex-start",
    width: "100%",
    fontSize: sizeSet.m,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginVertical: 8,
  },
});
export default TextInputArea;
