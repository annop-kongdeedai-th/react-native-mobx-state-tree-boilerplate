import { observer } from "mobx-react";
import * as React from "react";
import { Dimensions, Image as BaseImage, StyleSheet } from "react-native";
const { height: h, width: w } = Dimensions.get("window");
const screenScale = {
  width: w,
  height: h,
};
interface IFullWidthImage {
  src: any;
  style?: any;
}
@observer
class FullWidthImage extends React.Component<IFullWidthImage, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      width: null,
      height: null,
    };
  }
  public componentDidMount() {
    BaseImage.getSize(
      this.props.src.uri,
      (width, height) => {
        const maxWidth = screenScale.width;
        this.setState({
          width: maxWidth,
          height: height * (maxWidth / width),
        });
      },
      (error) => {
        console.log("error:", error);
      },
    );
  }
  public render() {
    const { src, style, ...rest } = this.props;
    return (
      <BaseImage
        {...rest}
        style={[
          styles.image,
          style,
          { height: this.state.height, width: this.state.width },
        ]}
        resizeMode="contain"
        source={src}
      />
    );
  }
}

const styles = StyleSheet.create({
  image: {
    // default style
  },
});

export default FullWidthImage;
