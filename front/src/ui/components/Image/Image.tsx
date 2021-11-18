interface ImageProps {
    src: string
    alt: string
    width: string
    height: string
}

export const Image = ({ src = '', alt = '', width = "50", height = "50" }: ImageProps) => (
    <img 
        src={src}
        alt={alt}
        width={width}
        height={height}
    />
)

export default Image;