import { Dimensions } from "react-native";

const { height: h, width: w } = Dimensions.get("window");
const SCREEN = {
  paddingHorizontal: w * 0.059,
  width: w,
  height: h,
};
export default SCREEN;
