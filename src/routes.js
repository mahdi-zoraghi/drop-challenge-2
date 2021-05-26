import {
  Home,
  Login,
  Register,
  Users,
  CreateUser,
  Resources,
  User,
  Resource,
} from "./pages"

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/login",
    component: Login,
    exact: true,
  },
  {
    path: "/register",
    component: Register,
    exact: true,
    isPrivate: false,
  },
  {
    path: "/users",
    component: Users,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/user/:id",
    component: User,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/create-user",
    component: CreateUser,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/resources",
    component: Resources,
    exact: true,
    isPrivate: true,
  },
  {
    path: "/resource/:id",
    component: Resource,
    exact: true,
    isPrivate: true,
  },
]

export default routes
