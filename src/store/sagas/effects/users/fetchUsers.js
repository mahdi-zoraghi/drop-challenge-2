import { put, call } from "redux-saga/effects"

import { getUsers } from "../../../../api"

import { setUsers, clearUsers } from "../../../reducer/usersSlice/usersSlice"
import {
  requested,
  failedRequest,
  successRequest,
} from "../../../reducer/mainSlice/mainSlice"

function* fetchUsers(action) {
  if (action.payload === 1) yield put(clearUsers())
  try {
    yield put(requested())
    const users = yield call(getUsers, action.payload)
    yield put(setUsers(users.data))
    yield put(successRequest())
  } catch {
    yield put(failedRequest())
  }
}

export default fetchUsers
