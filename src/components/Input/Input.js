import styled from "styled-components"

const StyledInput = styled.input`
  padding: 10px;
  outline: none;
  /* border: 1px solid gray; */
  border: 1px solid rgba(176, 176, 176, 0.2);
  border-radius: 5px;
  font-size: 16px;
  /* width: 200px; */
  width: 100%;
  height: 40px;
  background-color: rgba(176, 176, 176, 0.2);

  :hover {
    border: 1px solid rgba(0, 0, 255, 0.3);
  }
  :focus {
    border: 1px solid rgba(0, 0, 255, 0.7);
  }

  ::placeholder {
    opacity: 0.8;
  }
`

export const Label = styled.label`
  width: 75%;
  margin-bottom: 10px;
  input {
    margin-left: 10px;
    margin-top: 5px;
    width: 100%;
  }
  span {
    font-weight: bold;
  }
`

const Input = props =>
  props.label ? (
    <Label>
      <span>{props.label}</span>
      <br />
      <StyledInput {...props} />
    </Label>
  ) : (
    <StyledInput {...props} />
  )

export default Input
