import styled from "styled-components"
import { makeStyles } from "@material-ui/core/styles"

export const Wrapper = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #ffffff;
`

export const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}))
