import Axios from "axios";
import { baseUrl } from "./base-url";
import { UserModel } from "../models/UserModel";
import {VideoUploadModel} from "../models/VideoUploadModel";

export const getUsers = () => {
    return Axios.get(baseUrl + "/upa/v1/user")
}

export const uploadVideo=(Upload:VideoUploadModel)=>{
    return Axios.post(baseUrl+"/v1/upload",Upload)
}