import { ButtonStyled } from "./styles"

const Button = ({ children, size = "md", filled }) => (
  <ButtonStyled size={size} filled={filled}>
    {children}
  </ButtonStyled>
)

export default Button
