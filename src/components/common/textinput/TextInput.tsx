import * as React from "react";
import {
  StyleSheet,
  TextInput as BaseTextInput,
  TextInputProps,
  TouchableOpacity,
} from "react-native";

import { Button, Container, Icon, Link, Modal, Row, Text } from "..";
import {
  COLORS,
  colorSet,
  containerLayoutH,
  rowLayoutH,
  sizeIconSet,
  sizeSet,
} from "../../../constants";
import { AlertMessage } from "../message";

export enum keyboardType {
  email = "email-address",
  number = "number-pad",
  phone = "phone-pad",
}
export interface IInput {
  fieldName: string;
  value: any;
}
export interface ITextInput extends TextInputProps {
  label?: string;
  labelHelper?: string;
  titleHelper?: string;
  descriptionHelper?: string;
  placeholder?: string;
  failValidate?: boolean;
  value?: string;
  fieldName: string;
  textInputStyle?: any;
  password?: boolean;
  iconName?: string;
  iconColor?: colorSet;
  type?: keyboardType;
  size?: sizeSet;
  style?: any;
  setField?: (obj: IInput) => void;
  onPressIcon?: () => void;
}
class TextInput extends React.Component<ITextInput> {
  public state = {
    isFocus: false,
    isTouched: false,
    isShowPassword: false,
    isShowModal: false,
  };
  public render() {
    const {
      label,
      labelHelper,
      titleHelper,
      descriptionHelper,
      value,
      textInputStyle,
      password,
      type,
      iconName,
      style,
      ...rest
    } = this.props;
    const { isFocus } = this.state;
    const textStyle = this.getTextStyle();
    const containerStyle = this.getContainerStyle();
    return (
      <Container
        fluid
        layoutH={containerLayoutH.left}
        style={[styles.container, style]}
      >
        <Row layoutH={rowLayoutH.spaceBetween}>
          {label ? this.renderLabel() : null}
          {labelHelper && descriptionHelper ? this.renderLabelHelper() : null}
        </Row>
        <Row layoutH={rowLayoutH.left}>
          <BaseTextInput
            style={[
              styles.textInput,
              styles.shadow,
              isFocus && styles.isFocus,
              password && styles.paddingPassword,
              iconName && styles.paddingPassword,
              containerStyle,
              textStyle,
              textInputStyle,
            ]}
            onChangeText={this.onChangeText}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            underlineColorAndroid={COLORS.transparent}
            selectTextOnFocus={true}
            secureTextEntry={password && !this.state.isShowPassword}
            keyboardType={type || "default"}
            autoCapitalize="none"
            value={value}
            {...rest}
          />
          {password ? this.renderShowPasswordButton() : null}
          {iconName ? this.renderIconButton() : null}
        </Row>
      </Container>
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

  private getLabelStyle = () => {
    const { size } = this.props;
    let label;
    switch (size) {
      case sizeSet.s:
        label = sizeSet.xs;
        break;
      case sizeSet.m:
        label = sizeSet.xs;
        break;
      case sizeSet.l:
        label = sizeSet.s;
        break;
    }
    return label;
  };

  private getContainerStyle = () => {
    const { size } = this.props;
    const textContainer: any = {};
    switch (size) {
      case sizeSet.s:
        textContainer.paddingVertical = 4;
        break;
      case sizeSet.m:
        textContainer.paddingVertical = 8;
        break;
      case sizeSet.l:
        textContainer.paddingVertical = 16;
        break;
    }
    return textContainer;
  };

  private getIconStyle = () => {
    const { size, iconName } = this.props;
    let icon;
    switch (size) {
      case sizeSet.s:
        icon = sizeIconSet.xs;
        break;
      case sizeSet.m:
        icon = sizeIconSet.s;
        break;
      case sizeSet.l:
        icon = iconName ? sizeIconSet.l : sizeIconSet.m;
        break;
    }
    return icon;
  };
  private renderLabel = () => {
    const { label } = this.props;
    const labelStyle = this.getLabelStyle();
    return (
      <Text color={colorSet.secondary} size={labelStyle || sizeSet.xs}>
        {label}
      </Text>
    );
  };
  private renderLabelHelper = () => {
    const { labelHelper, titleHelper, descriptionHelper } = this.props;
    const labelStyle = this.getLabelStyle();
    return (
      <React.Fragment>
        <Link
          size={labelStyle || sizeSet.xs}
          hideUnderline
          title={labelHelper}
          onPress={() => this.showDescriptionHelper()}
        />
        <Modal
          isVisible={this.state.isShowModal}
          onBackdropPress={() => this.hideDescriptionHelper()}
          style={styles.modalContainer}
        >
          <AlertMessage
            title={titleHelper ? titleHelper! : labelHelper!}
            message={descriptionHelper!}
            onPressOk={() => this.hideDescriptionHelper()} />
        </Modal>
      </React.Fragment>
    );
  };

  private showDescriptionHelper = () => {
    this.setState({ isShowModal: true });
  };

  private hideDescriptionHelper = () => {
    this.setState({ isShowModal: false });
  };

  private renderShowPasswordButton = () => {
    return (
      <TouchableOpacity
        onPressIn={this.showPassword}
        onPressOut={this.hidePassword}
        activeOpacity={1}
        style={[styles.showPasswordIconContainer]}
      >
        {this.renderIcon()}
      </TouchableOpacity>
    );
  };
  private renderIcon = () => {
    const { isShowPassword } = this.state;
    const iconStyle = this.getIconStyle();
    return (
      <Icon size={iconStyle} name={isShowPassword ? "eye" : "eye-slash"} />
    );
  };
  private showPassword = () => {
    this.setState({ isShowPassword: true });
  };
  private hidePassword = () => {
    this.setState({ isShowPassword: false });
  };
  private onChangeText = (value: string) => {
    const { fieldName, setField } = this.props;
    if (typeof setField !== "undefined") {
      setField({ fieldName, value });
    }
  };
  private onFocus = (e: any) => {
    this.setState({ isFocus: true });
  };
  private onBlur = () => {
    this.setState({ isFocus: false });
  };
  private renderIconButton = () => {
    const { iconName, iconColor } = this.props;
    const iconStyle = this.getIconStyle();
    return (
      <Container style={styles.showIconContainer} fluid shrink>
        <Button onPress={this.onPressIcon}>
          <Icon name={iconName!} color={iconColor} size={iconStyle} />
        </Button>
      </Container>
    );
  };
  private onPressIcon = () => {
    const { onPressIcon } = this.props;
    if (typeof onPressIcon !== "undefined") {
      onPressIcon();
    }
  };
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  textInput: {
    width: "100%",
    // paddingHorizontal: 0,
    fontSize: sizeSet.m,
    paddingHorizontal: 18,
    paddingVertical: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.transparent,
    borderBottomColor: COLORS.black,
  },
  labelContainer: {
    position: "absolute",
    left: 0,
    top: 0,
  },
  textContainer: {
    alignSelf: "auto",
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 200,
    margin: 0,
  },
  showIconContainer: {
    position: "absolute",
    right: 16,
    top: 4,
    bottom: 0,
    zIndex: 300,
    elevation: 4,
  },
  showPasswordIconContainer: {
    position: "absolute",
    right: 8,
    bottom: 16,
    zIndex: 300,
    elevation: 4,
  },
  paddingPassword: {
    paddingRight: 48,
  },
  isFocus: {
    borderBottomColor: COLORS.lightGreen,
  },
  shadow: {
    borderColor: COLORS.white,
    borderBottomWidth: 0,
    elevation: 1,
    backgroundColor: COLORS.white,
    marginBottom: 0,
  },
});
export default TextInput;
