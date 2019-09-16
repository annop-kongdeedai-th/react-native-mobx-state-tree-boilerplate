import { Dimensions, PixelRatio } from "react-native";

const pixelRatio = PixelRatio.get();
const { width, height } = Dimensions.get("window");

const normalize = (size: number): number => {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older androids
    if (width < 360) {
      return size * 0.95;
    }
    // iphone 5
    if (height < 667) {
      return size;
    }
    // iphone 6-6s
    if (height >= 667 && height <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }
  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (width <= 360) {
      return size;
    }
    // catch other weird android width sizings
    if (height < 667) {
      return size * 1.15;
    }
    if (height >= 667 && height <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note
    return size * 1.27;
  }
  if (pixelRatio >= 3.5) {
    // catch android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (width <= 360) {
      return size;
    }
    if (height < 667) {
      return size * 1.2;
    }
    if (height >= 667 && height <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  // if older device ie pixelRatio !== 2 || 3 || 3.5
  return size;
};

export default normalize;
