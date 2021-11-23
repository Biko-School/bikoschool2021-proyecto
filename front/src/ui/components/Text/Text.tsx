type fontSizes = "H1" | "H2" | "H3" | "H4" | "Base" | "Small";
type fontWeights = "Light" | "Normal" | "Bold" | "ExtraBold";
type fontColor =
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

interface TextProps {
  size: fontSizes;
  weight: fontWeights;
  color: fontColor;
  text: string;
}

export const Text = ({ size, weight, color, text }: TextProps) => (
  <div
    style={{
      fontSize: getFontSize(size),
      fontWeight: getFontWeight(weight),
      color: getFontColor(color),
    }}
  >
    {text}
  </div>
);

const getFontSize = (size: fontSizes) => {
  const sizeMapper = {
    H1: "41.83px",
    H2: "36.41px",
    H3: "25.63px",
    H4: "18.00px",
    Base: "16.00px",
    Small: "12.64px",
  };
  return sizeMapper[size];
};

const getFontWeight = (weight: fontWeights) => {
  const weightMapper = {
    Light: 300,
    Normal: 400,
    Bold: 700,
    ExtraBold: 800,
  };
  return weightMapper[weight];
};

const getFontColor = (color: fontColor) => {
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
