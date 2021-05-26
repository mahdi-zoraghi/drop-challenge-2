import { put, call } from "redux-saga/effects"

import { getResources } from "../../../../api"

import {
  clearResources,
  setResources,
} from "../../../reducer/resourcesSlice/resourcesSlice"
import {
  requested,
  failedRequest,
  successRequest,
} from "../../../reducer/mainSlice/mainSlice"

function* fetchUsers(action) {
  if (action.payload === 1) yield put(clearResources())
  try {
    yield put(requested())
    const users = yield call(getResources, action.payload)
    yield put(setResources(users.data))
    yield put(successRequest())
  } catch {
    yield put(failedRequest())
  }
}

export default fetchUsers
