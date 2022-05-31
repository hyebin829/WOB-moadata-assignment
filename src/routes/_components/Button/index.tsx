interface IButtonProps {
  type: 'button' | 'submit' | 'reset'
  margin?: string
  text?: string
  width?: string
  height?: string
  fontSize?: string
  border?: string
  borderRadius?: string
  color?: string
  backgroundColor?: string
  onClick?: () => void
}

const Button = ({
  type,
  text,
  margin,
  width,
  height,
  fontSize,
  border,
  color,
  borderRadius,
  backgroundColor,
  onClick,
}: IButtonProps) => {
  const buttonStyles = {
    text,
    margin,
    width,
    height,
    fontSize,
    border,
    color,
    borderRadius,
    backgroundColor,
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} style={buttonStyles} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
