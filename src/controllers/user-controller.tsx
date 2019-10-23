import Axios from "axios";
import { baseUrl } from "./base-url";
import { UserModel } from "../models/UserModel";

export const getUsers = () => {
    return Axios.get(baseUrl + "/upa/v1/user")
}

export const createUser = (user :UserModel) => {
    return Axios.post(baseUrl + "/upa/v1/user/create", user)
}

export const getUserByUserId = (userid :string) => {
    return Axios.get(baseUrl + "/upa/v1/user/"+ userid)
}

export const searchUser = (first_name :string, last_name :string) => {
    return Axios.get(baseUrl + `/upa/v1/user/search?name=${first_name}&last_name=${last_name}`)
}

export const updateUser = (userid :string) => {
    return Axios.get(baseUrl + "/upa/v1/user/update/"+ userid)
}

export const deleteUser = (userid :string) => {
    return Axios.delete(baseUrl + "/upa/v1/user/delete/"+ userid)
}

export const followingUser = (userid :string) => {
    return Axios.delete(baseUrl + "/upa/v1/user/following/store/"+ userid)
}

export const getFollowingUsers = (userid :string) => {
    return Axios.get(baseUrl + "/upa/v1/user/following/"+ userid)
}

export const unFollowingUser = (userid :string, id_following :string) => {
    return Axios.delete(baseUrl + `/upa/v1/user/following/delete/${userid}/${id_following}`)
}
