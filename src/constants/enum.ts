import { COLORS } from ".";
import { FONTSIZE, ICONSIZE } from "./SIZE";

export enum containerLayoutH {
  right = "right",
  left = "left",
}
export enum containerLayoutV {
  top = "top",
  bottom = "bottom",
  spaceBetween = "spaceBetween",
  spaceAround = "spaceAround",
}

export enum rowLayoutH {
  left = "left",
  right = "right",
  spaceBetween = "spaceBetween",
  spaceAround = "spaceAround",
}

export enum rowLayoutV {
  center = "center",
}

export enum colorSet {
  default = COLORS.darkGrey,
  primary = COLORS.lightGreen,
  secondary = COLORS.lightGrey, // เทาอ่อน (#90A4B7)
  danger = COLORS.red, // แดง (#E8374F)
  warning = COLORS.yellow, // เหลือง (#EEC300)
  success = COLORS.green, // เขียว (#37C5AB)
  highlight = COLORS.black, //  ดำ (#000000)
  info = COLORS.blue, // น้ำเงิน (#4186E0)
  transparent = COLORS.transparent,
}

export enum sizeSet {
  xs = FONTSIZE.xs,
  s = FONTSIZE.s,
  m = FONTSIZE.m,
  l = FONTSIZE.l,
  xl = FONTSIZE.xl,
  xxl = FONTSIZE.xxl,
  xxxl = FONTSIZE.xxxl,
}

export enum sizeIconSet {
  xs = ICONSIZE.xs,
  s = ICONSIZE.s,
  m = ICONSIZE.m,
  l = ICONSIZE.l,
  xl = ICONSIZE.xl,
}

export enum resizeModeSet {
  cover = "cover",
  contain = "contain",
  stretch = "stretch",
  repeat = "repeat",
  center = "center",
}

export enum frameSet {
  circle = "circle",
  square = "square",
}
export enum imagePickerSet {
  picture,
  camera,
}

export enum formatDate {
  default = "LLL",
  date = "Do MMM YY",
  shortDate = "MMM",
  LongDate = "MMM YY",
  locale = "th",
}
