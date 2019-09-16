declare module "react-native-modal-selector" {
  import { Component, ReactNode } from "react";
  import { StyleProp, ViewStyle } from "react-native";

  // type AnimationConfig = string | { from: Object; to: Object };
  // type Orientation =
  //   | "portrait"
  //   | "portrait-upside-down"
  //   | "landscape"
  //   | "landscape-left"
  //   | "landscape-right";

  export interface ModalSelectorProps {
    data: any;
    initValue?: string;
    onChange?: (obj: any) => void;
    keyExtractor?: (item: any) => void;
    labelExtractor?: (item: any) => void;
    style?: StyleProp<ViewStyle>;
    backdropPressToClose?: boolean;
    // animationIn?: AnimationConfig;
    // animationInTiming?: number;
    // animationOut?: AnimationConfig;
    // animationOutTiming?: number;
    // avoidKeyboard?: boolean;
    // backdropColor?: string;
    // backdropOpacity?: number;
    // backdropTransitionInTiming?: number;
    // backdropTransitionOutTiming?: number;
    // useNativeDriver?: boolean;
    overlayStyle?: StyleProp<ViewStyle>;
    children?: ReactNode;
    // deviceHeight?: number;
    // deviceWidth?: number;
    // hideModalContentWhileAnimating?: boolean;
    // isVisible: boolean;
    // onModalShow?: () => void;
    // onModalHide?: () => void;
    // onBackButtonPress?: () => void;
    // onBackdropPress?: () => void;
    // onSwipe?: () => void;
    // swipeThreshold?: number;
    // style?: StyleProp<ViewStyle>;
    // swipeDirection?: "up" | "down" | "left" | "right";
    // scrollTo?: (e: any) => void;
    // scrollOffset?: number;
    // scrollOffsetMax?: number;
    // supportedOrientations?: Orientation[];
    // onDismiss?: () => void;
    // onShow?: () => void;
    // hardwareAccelerated?: boolean;
    // onOrientationChange?: (orientation: "portrait" | "landscape") => void;
    // presentationStyle?: "fullScreen" | "pageSheet" | "formSheet" | "overFullScreen";
  }

  class ModalSelector extends Component<ModalSelectorProps> {}

  export default ModalSelector;
}
