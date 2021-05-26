import main from "./mainSlice/mainSlice"
import auth from "./authSlice/authSlice"
import users from "./usersSlice/usersSlice"
import user from "./userSlice/userSlice"
import resources from "./resourcesSlice/resourcesSlice"
import resource from "./resourceSlice/resourceSlice"

const reducer = {
  main,
  auth,
  users,
  user,
  resources,
  resource,
}

export default reducer
