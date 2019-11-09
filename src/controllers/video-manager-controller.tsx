import Axios from "axios";
import { baseUrl } from "./base-url";
import { VideoModel } from "../models/VideoModel";

export const saveMetadataVideo = (userId :string, video :VideoModel) => {
    return Axios.post(baseUrl + "/vidm/v1/metavideos/store/"+userId, video)
}