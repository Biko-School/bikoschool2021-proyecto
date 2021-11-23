import { Text } from "../Text/Text";
import arrow from "../../../images/Arrow.png";

interface TitleProps {
    size: 'H1' | 'H2' | 'H3' 
    weight: 'Bold' | 'ExtraBold'
    text: string
}

export const Title = ({ size, weight, text }: TitleProps) => (
  <div>
    <img src={arrow} alt="logo" width="25" height="20" />
    <Text size = {size} weight = {weight} text = {text} />
  </div>
);