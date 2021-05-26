import styled from "styled-components"

export const Wrapper = styled.form`
  width: 75%;
  /* width: 500px; */
  height: 450px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 8px;
  background-color: #ffffff;
  display: flex;

  a {
    color: blue;
    padding-left: 15px;
  }

  div:nth-child(1) {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 255, 0.5);
    border-radius: 8px 0 0 8px;
    @media only screen and (max-width: 600px) {
      display: none;
    }

    img {
      width: 100%;
      object-fit: contain;
      background-position: center;
      background-size: cover;
    }
  }

  div:nth-child(2) {
    width: 70%;
    padding: 20px 90px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 800px) {
      padding: 20px 10px;
    }
    @media only screen and (max-width: 600px) {
      width: 100%;
      padding: 20px 30px;
    }
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  button {
    margin-left: 10px;
  }
`
