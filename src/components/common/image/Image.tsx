import * as React from "react";
import { Image as BaseImage, StyleSheet } from "react-native";
import { resizeModeSet } from "../../../constants";
import { normalize } from "../../../utils";

interface IImage {
  size?: number;
  ratio?: number;
  circle?: boolean;
  roundConer?: boolean;
  src?: any;
  resizeMode?: resizeModeSet;
  style?: any;
}

class Image extends React.PureComponent<IImage> {
  public render() {
    const { src, style, resizeMode } = this.props;
    const ImageStyle: any = this.getStyle();
    return (
      <BaseImage source={src} resizeMode={resizeMode} style={[styles.image, ImageStyle, style]} />
    );
  }

  private getStyle = () => {
    const { size, circle, ratio, roundConer } = this.props;
    const ImageStyle: any = {};
    let ImageRatio = 1;

    if (ratio) {
      ImageRatio = ratio;
    }

    if (size) {
      ImageStyle.width = normalize(size);
      ImageStyle.height = normalize(size) * ImageRatio;
      if (circle) {
        ImageStyle.borderRadius = normalize(size) / 2;
      }
      if (roundConer) {
        ImageStyle.borderRadius = 30;
      }
    }

    return ImageStyle;
  };

}

const styles = StyleSheet.create({
  image: {
    // default style
  },
});

export default Image;
