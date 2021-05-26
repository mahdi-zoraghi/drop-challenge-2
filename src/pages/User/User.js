import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import styled from "styled-components"

import { Button, EditUserModal } from "../../components"

import { fetchUser, deleteUser } from "../../store/actions"

export const Wrapper = styled.div`
  /* padding-left: 30px; */
  margin-left: 30px;
`

const User = ({ match, history }) => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const userId = match.params.id

  console.log(user)
  const [openModalEditUser, setOpenModalEditUser] = useState(false)
  const toggleModal = () => setOpenModalEditUser(prev => !prev)

  useEffect(() => {
    dispatch(fetchUser(userId))
  }, [dispatch, userId])

  const handleDeleteUser = id => {
    dispatch(deleteUser(id))
    history.push("/users")
  }

  return (
    <Wrapper>
      <h1>User page</h1>
      <h2>
        {user?.data?.first_name} {user?.data?.last_name}
      </h2>
      <br />
      <h3>Support</h3>
      <p>{user?.support?.text}</p>
      <span>{user?.support?.url}</span>
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={toggleModal}>
        Edit
      </Button>
      <br />
      <br />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleDeleteUser(user.data.id)}
      >
        Delete
      </Button>
      <EditUserModal
        open={openModalEditUser}
        onClose={toggleModal}
        user={user?.data}
      />
    </Wrapper>
  )
}

export default User
