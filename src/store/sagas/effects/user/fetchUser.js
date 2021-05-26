import { put, call } from "redux-saga/effects"

import { getUser } from "../../../../api"

import { setUser, clearUser } from "../../../reducer/userSlice/userSlice"
import {
  requested,
  failedRequest,
  successRequest,
} from "../../../reducer/mainSlice/mainSlice"

function* fetchUser(action) {
  yield put(clearUser())
  try {
    yield put(requested())
    const users = yield call(getUser, action.payload)
    yield put(setUser(users.data))
    yield put(successRequest())
  } catch {
    yield put(failedRequest())
  }
}

export default fetchUser
