import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow as MUITableRow,
  Paper,
  Avatar,
} from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import { v4 as uuIdv4 } from "uuid"

import { Button, EditUserModal } from "../../components"

import { Wrapper, TableRow, PaginationWrapper } from "./Users.styles"

import { fetchUsers, deleteUser } from "../../store/actions"

const Users = ({ history }) => {
  const [pageNumber, setPageNumber] = useState(1)
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.data)
  const totalPage = useSelector(state => state.users.total_pages)
  const [openModalEditUser, setOpenModalEditUser] = useState(false)
  const [editUser, setEditUser] = useState(null)
  const toggleModal = () => setOpenModalEditUser(prev => !prev)

  useEffect(() => {
    dispatch(fetchUsers(pageNumber))
  }, [dispatch, pageNumber])

  const handlePage = (e, value) => setPageNumber(value)

  const handleGoUserPage = id => history.push(`/user/${id}`)

  const handleDeleteUser = id => dispatch(deleteUser(id))

  const handleEditUser = id => {
    setEditUser(id)
    toggleModal()
  }

  return (
    <Wrapper>
      <h1> Users page</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <MUITableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Family</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Edit</TableCell>
              <TableCell>Delete</TableCell>
            </MUITableRow>
          </TableHead>
          <TableBody>
            {users?.map(user => (
              <TableRow key={uuIdv4()}>
                <TableCell onClick={() => handleGoUserPage(user.id)}>
                  {user.id}
                </TableCell>
                <TableCell onClick={() => handleGoUserPage(user.id)}>
                  {user.first_name}
                </TableCell>
                <TableCell onClick={() => handleGoUserPage(user.id)}>
                  {user.last_name}
                </TableCell>
                <TableCell onClick={() => handleGoUserPage(user.id)}>
                  {user.email}
                </TableCell>
                <TableCell onClick={() => handleGoUserPage(user.id)}>
                  <Avatar src={user.avatar} alt={user.first_name} />
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleEditUser(user)}
                  >
                    Edit
                  </Button>
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {editUser && (
          <EditUserModal
            open={openModalEditUser}
            onClose={toggleModal}
            user={editUser}
          />
        )}
      </TableContainer>
      <PaginationWrapper>
        <Pagination count={totalPage} onChange={handlePage} />
      </PaginationWrapper>
    </Wrapper>
  )
}

export default Users
