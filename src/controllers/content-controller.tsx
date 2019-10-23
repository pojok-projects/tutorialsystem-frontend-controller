import Axios from "axios";
import { baseUrl } from "./base-url";

export const getAllContentMetadata = () => {
    return Axios.get(baseUrl + "/conm/v1/")
}

export const getContentMetadataById = (metadataid :string) => {
    return Axios.get(baseUrl + "/conm/v1/"+ metadataid)
}

export const updateContentMetadata = () => {
    
}

export const deleteContentMetadataById = (metadataid :string) => {
    return Axios.get(baseUrl + "/conm/v1/delete/"+ metadataid)
}


export const searchContentMetadata = (search :string) => {
    return Axios.post(baseUrl + "/conm/v1/search", { title : search })
}

export const increaseNumberofVideoDownload = (metadataid :string) => {
    return Axios.get(baseUrl + "/conm/v1/download/"+ metadataid)
}

export const increaseNumberofVideoShare = (metadataid :string) => {
    return Axios.get(baseUrl + "/conm/v1/share/"+ metadataid)
}

export const increaseNumberofVideoView = (metadataid :string) => {
    return Axios.get(baseUrl + "/conm/v1/view/"+ metadataid)
}

export const increaseNumberofVideoSave = (metadataid :string) => {
    return Axios.get(baseUrl + "/conm/v1/save/"+ metadataid)
}

export const getContentMetadataByCategoryId = (category_id :string) => {
    return Axios.get(baseUrl + "/conm/v1/category/"+ category_id)
}    

export const searchContentMetadataByCategoryId = (category :string, title :string, genre :string) => {
    return Axios.post(baseUrl + "/conm/v1/category/search", {category,title,genre})
}    

export const removeCategorytoContentMetadata = (category_id :string, metadata_id :string) => {
    return Axios.post(baseUrl + "/conm/v1/category/remove", {category: category_id, metadata_id})
}    

