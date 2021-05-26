import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Modal } from "@material-ui/core"

import { Input, Button } from "../../components"

import { editUser } from "../../store/actions"

import { Paper } from "./EditUserModal.styles"

const EditUserModal = ({ open, onClose, user }) => {
  const dispatch = useDispatch()

  console.log(user)

  const [newUser, setNewUser] = useState(user)

  useEffect(() => {
    setNewUser(user)
  }, [user])

  const handleChangeInput = ({ target }) =>
    setNewUser(prevState => ({ ...prevState, [target.name]: target.value }))

  const handleEditUser = e => {
    e.preventDefault()
    dispatch(editUser(newUser))
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Paper component="form" onSubmit={handleEditUser}>
        <h1>Edit User</h1>
        <Input
          type="text"
          placeholder="Enter your name"
          label="Name"
          name="first_name"
          value={newUser?.first_name}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          placeholder="Enter your family"
          label="Family"
          name="last_name"
          value={newUser?.last_name}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          placeholder="Enter your email"
          label="Email"
          name="email"
          value={newUser?.email}
          onChange={handleChangeInput}
        />
        <Input
          type="text"
          placeholder="Enter your Avatar URL"
          label="Avatar"
          name="avatar"
          value={newUser?.avatar}
          onChange={handleChangeInput}
        />
        <br />
        <br />
        <Button color="primary" variant="contained" type="submit">
          Edit User
        </Button>
      </Paper>
    </Modal>
  )
}

export default EditUserModal
