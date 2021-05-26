import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow as MUITableRow,
  Paper,
} from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import { v4 as uuIdv4 } from "uuid"

import { Wrapper, PaginationWrapper, TableRow } from "./Resources.styles"

import { fetchResources } from "../../store/actions"

const Resources = ({ history }) => {
  const [pageNumber, setPageNumber] = useState(1)

  const dispatch = useDispatch()
  const resources = useSelector(state => state.resources.data)
  const totalPage = useSelector(state => state.users.total_pages)

  const handlePage = (e, value) => setPageNumber(value)

  useEffect(() => {
    dispatch(fetchResources(pageNumber))
  }, [dispatch, pageNumber])

  const handleGoResourcePage = id => history.push(`/resource/${id}`)

  return (
    <Wrapper>
      <h1> Resources page</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <MUITableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Year</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Pantone value</TableCell>
            </MUITableRow>
          </TableHead>
          <TableBody>
            {resources?.map(resource => (
              <TableRow
                key={uuIdv4()}
                onClick={() => handleGoResourcePage(resource.id)}
              >
                <TableCell component="th" scope="row">
                  {resource.id}
                </TableCell>
                <TableCell>{resource.name}</TableCell>
                <TableCell>{resource.year}</TableCell>
                <TableCell style={{ backgroundColor: resource.color }}>
                  {resource.color}
                </TableCell>
                <TableCell>{resource.pantone_value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationWrapper>
        <Pagination count={totalPage} onChange={handlePage} />
      </PaginationWrapper>
    </Wrapper>
  )
}

export default Resources
