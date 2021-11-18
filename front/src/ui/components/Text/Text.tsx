type fontSizes = 'H1' | 'H2' | 'H3' | 'Base' | 'Small'
type fontWeights = 'Light' | 'Normal'| 'Bold' | 'ExtraBold'

interface TextProps {
    size: fontSizes
    weight: fontWeights
    text: string
}

export const Text = ({ size, weight, text }: TextProps) => (    
    <div style={{ fontSize: getFontSize(size), fontWeight: getFontWeight(weight) }}>
        {text}
    </div>
)

const getFontSize = (size: fontSizes) => {
    const sizeMapper = {
        'H1':    "41.83px",
        'H2':    "36.41px",
        'H3':    "25.63px",
        'H4':    "18.00px",
        'Base':  "16.00px",
        'Small': "12.64px"
      };
      return sizeMapper[size];
}

const getFontWeight = (weight: fontWeights) => {
    const weightMapper = {
        'Light':     300,
        'Normal':    400,
        'Bold':      700,
        'ExtraBold': 800
      };
      return weightMapper[weight];
}

export default Text;