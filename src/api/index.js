import Axios from "axios"

export const axios = Axios.create({
  baseURL: "https://reqres.in/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export const getUsers = page => axios.get(`/users?page=${page}`)

export const getUser = id => axios.get(`/users/${id}`)

export const deleteUser = id => axios.delete(`/users/${id}`)

export const createUser = params => axios.post("/users", params)

export const editUser = params => axios.put(`/users/${params.id}`)

//

export const getResources = page => axios.get(`/unknown?page=${page}`)

export const getResource = id => axios.get(`/unknown/${id}`)
