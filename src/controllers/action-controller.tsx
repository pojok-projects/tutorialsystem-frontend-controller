import Axios from "axios";
import { baseUrl } from "./base-url";
import { VideoModel } from "../models/VideoModel";

export const uploadVideo = (video :FormData) => {
    return Axios.post(baseUrl + "/vam/v1/upload", video)
}

export const createMetadataVideo = (video :VideoModel) => {
    return Axios.post(baseUrl + "/vam/v1/storemetadata", video)
}

