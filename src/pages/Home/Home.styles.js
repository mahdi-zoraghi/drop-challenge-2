import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;

  button {
    width: 100px;
    margin-left: 80px;
  }
`

export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 60%;
`

export const Card = styled.div`
  width: 180px;
  padding: 10px;
  height: 60px;
  background-color: ${props => props.back};
  border-radius: 8px;
  display: flex;
  align-items: center;
`
