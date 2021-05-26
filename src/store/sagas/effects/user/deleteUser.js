import { put, call } from "redux-saga/effects"

import { deleteUser as deleteUserApi } from "../../../../api"

import { deleteUser } from "../../../reducer/usersSlice/usersSlice"
import {
  requested,
  failedRequest,
  successRequest,
} from "../../../reducer/mainSlice/mainSlice"

function* fetchUser(action) {
  try {
    yield put(requested())
    yield call(deleteUserApi, action.payload)
    yield put(deleteUser(action.payload))
    yield put(successRequest())
  } catch {
    yield put(failedRequest())
  }
}

export default fetchUser
