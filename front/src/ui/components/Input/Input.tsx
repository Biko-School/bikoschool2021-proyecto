export const Input = ({ className = '', placeholder = '', value = '', onChange = (event:any) => {} }) => (
    <input
        value = { value }
        onChange={ onChange }
        className ={ className }
        placeholder = { placeholder }
    />
)

export default Input;