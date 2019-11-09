import Axios from "axios";
import { baseUrl } from "./base-url";

export const getUsers = () => {
    return Axios.get(baseUrl + "/upa/v1/user")
}

export const uploadVideo = (file :FormData, config :any) =>{
    return Axios.post(baseUrl+"/vidu/v1/upload", file, config)
}