import { Image } from "../Image/Image";
import { Text } from "../Text/Text";

export const Title = ({ className = '', src = '', alt = '', width = "50", height = "50", textClassName = '', textChildren = '' }) => (
    <div className={className}>
      <Image src={src} alt={alt} width={width} height={height}/>
      <Text className= {textClassName} children = {textChildren}/>
    </div>
)

export default Title;