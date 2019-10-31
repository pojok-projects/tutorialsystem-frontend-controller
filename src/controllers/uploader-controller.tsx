import Axios from "axios";
import { baseUrl } from "./base-url";
import {VideoUploadModel} from "../models/VideoUploadModel";
import {VideoModel} from "../models/VideoModel"

export const uploadVideo = (video :FormData) => {
    return Axios.post(baseUrl + "/vam/v1/upload", video)
}


