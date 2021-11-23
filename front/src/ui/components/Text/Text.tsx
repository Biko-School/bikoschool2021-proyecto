import { fontColor, getFontColor } from "../../theme/colors";
import {
  fontSizes,
  fontWeights,
  getFontSize,
  getFontWeight,
} from "../../theme/size";
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
