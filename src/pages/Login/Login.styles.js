import styled from "styled-components"

export const Wrapper = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 400px;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 800px) {
    width: 80%;
  }

  a {
    color: blue;
    float: left;
    width: 70%;
  }
`

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  object-fit: contain;
  background-position: center;
  background-size: cover;
`

export const ButtonWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    margin-left: 20px;
  }
`
