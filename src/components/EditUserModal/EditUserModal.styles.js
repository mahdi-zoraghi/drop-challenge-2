import styled from "styled-components"
import { Paper as MUIPaper } from "@material-ui/core"

export const Paper = styled(MUIPaper)`
  width: 500px;
  height: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  padding-right: 30px;

  /*  */
  /* display: flex;
  flex-direction: column;
   align-items: center; 
  justify-content: space-evenly; */

  button {
    margin-left: 10px;
    width: 100%;
  }
`
