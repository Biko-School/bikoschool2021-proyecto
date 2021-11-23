export type fontColor =
  | "Purple"
  | "LightRed"
  | "LightBlue"
  | "LightGreen"
  | "LightYellow"
  | "Blue"
  | "Pink"
  | "Yellow"
  | "Black"
  | "Grey"
  | "White";

export const getFontColor = (color: fontColor) => {
  const colorMapper = {
    Purple: "#9933FF",
    LightRed: "#FF6666",
    LightBlue: "#00CCFF",
    LightGreen: "#00FF99",
    LightYellow: "#FFF9AA",
    Blue: "#4158D0",
    Pink: "#C850C0",
    Yellow: "#FFCC70",
    Black: "#000000",
    Grey: "#999999",
    White: "#FFFFFF",
  };
  return colorMapper[color];
};
