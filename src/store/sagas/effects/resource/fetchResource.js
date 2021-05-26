import { put, call } from "redux-saga/effects"

import { getResource } from "../../../../api"

import {
  setResource,
  clearResource,
} from "../../../reducer/resourceSlice/resourceSlice"
import {
  requested,
  failedRequest,
  successRequest,
} from "../../../reducer/mainSlice/mainSlice"

function* fetchResource(action) {
  yield put(clearResource())
  try {
    yield put(requested())
    const resource = yield call(getResource, action.payload)
    yield put(setResource(resource.data))
    yield put(successRequest())
  } catch {
    yield put(failedRequest())
  }
}

export default fetchResource
