import { takeEvery } from "redux-saga/effects"

import fetchUserSaga from "./fetchUser"
import deleteUserSaga from "./deleteUser"
import createUserSaga from "./createUser"
import editUserSaga from "./editUser"

import { fetchUser, deleteUser, createUser, editUser } from "../../../actions"

function* usersSagas() {
  yield takeEvery(fetchUser.type, fetchUserSaga)
  yield takeEvery(deleteUser.type, deleteUserSaga)
  yield takeEvery(createUser.type, createUserSaga)
  yield takeEvery(editUser.type, editUserSaga)
}

export default usersSagas
