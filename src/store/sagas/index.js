import { all, fork } from "redux-saga/effects"

import usersSagas from "./effects/users"
import userSagas from "./effects/user"
import resourcesSagas from "./effects/resources"
import resourceSagas from "./effects/resource"

const sagasList = [usersSagas, resourcesSagas, userSagas, resourceSagas]

function* sagas() {
  yield all(sagasList.map(fork))
}

export default sagas
