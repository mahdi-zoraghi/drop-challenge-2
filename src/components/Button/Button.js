import { Button as MUIButton } from "@material-ui/core"
import styled from "styled-components"

const StyledMUIButton = styled(MUIButton)`
  width: 75%;
  text-transform: none;
  box-shadow: none;

  :hover {
    box-shadow: none;
  }
`

const Button = props => <StyledMUIButton {...props} />

export default Button
