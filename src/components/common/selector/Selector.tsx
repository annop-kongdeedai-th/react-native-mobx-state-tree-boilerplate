import * as React from "react";
import { StyleSheet } from "react-native";
import ModalSelector, { ModalSelectorProps } from "react-native-modal-selector";

import { IInput } from "..";

interface IData {
  key: number;
  label: string;
}
interface ISelector extends ModalSelectorProps {
  data: IData[] | object[];
  fieldName: string;
  value: string;
  keyEx?: string;
  labelEx?: string;
  onChange?: (obj: IInput) => void;
}
class Selector extends React.Component<ISelector> {
  public render() {
    const { data, value, children } = this.props;
    return (
      <ModalSelector
        data={data}
        initValue={value || ""}
        onChange={this.onChange}
        keyExtractor={this.keyExtractor}
        labelExtractor={this.labelExtractor}
        style={[styles.selector]}
        backdropPressToClose={true}
      >
        {children}
      </ModalSelector>
    );
  }
  private onChange = (option: IData) => {
    const { fieldName, onChange } = this.props;
    if (typeof onChange !== "undefined") {
      onChange({ fieldName, value: option });
    }
  };
  private keyExtractor = (item: any) => item[this.props.keyEx || "key"];
  private labelExtractor = (item: any) => item[this.props.labelEx || "label"];
}
const styles = StyleSheet.create({
  selector: {
    alignSelf: "stretch",
  },
});
export default Selector;
