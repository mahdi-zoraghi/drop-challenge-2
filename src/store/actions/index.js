import { createAction } from "@reduxjs/toolkit"

export const fetchUsers = createAction("fetch/fetchUsers")

export const fetchUser = createAction("fetch/fetchUser")

export const deleteUser = createAction("delete/deleteUser")

export const fetchResources = createAction("fetch/fetchResources")

export const fetchResource = createAction("fetch/fetchResource")

export const createUser = createAction("create/createUser")

export const editUser = createAction("edit/editUser")
