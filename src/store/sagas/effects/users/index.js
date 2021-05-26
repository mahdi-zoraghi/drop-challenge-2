import { takeEvery } from "redux-saga/effects"

import fetchUsersSaga from "./fetchUsers"

import { fetchUsers } from "../../../actions"

function* usersSagas() {
  yield takeEvery(fetchUsers.type, fetchUsersSaga)
}

export default usersSagas
