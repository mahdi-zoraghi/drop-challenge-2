import styled from "styled-components"
import { TableRow as MUITableRow } from "@material-ui/core"

export const Wrapper = styled.div`
  margin-left: 20px;
  width: 70%;
`

export const TableRow = styled(MUITableRow)`
  cursor: pointer;
  transition: all 0.3s ease;

  :hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    td {
      color: #ffffff;
    }
  }
`

export const PaginationWrapper = styled.div`
  margin-bottom: 50px;
  margin-top: 30px;
`
