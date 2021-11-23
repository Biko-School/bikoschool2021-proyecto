import { Text } from "../Text/Text";

interface TitleProps {
  size: "H1" | "H2" | "H3" | "H4";
  weight: "Bold" | "ExtraBold";
  text: string;
}

export const Title = ({ size, weight, text }: TitleProps) => (
  <Text size={size} weight={weight} color={"White"} text={text} />
);
