import Axios from "axios";
import { baseUrl } from "./base-url";
import { PlaylistCategoryModel } from "../models/PlaylistModel";

export const createPlaylistCategory = (playlistCategory :PlaylistCategoryModel) => {
  return Axios.post(baseUrl + "/pm/v1/category/create", playlistCategory)
}

export const updatePlaylistCategory = (playlistCategory :PlaylistCategoryModel) => {
  return Axios.post(baseUrl + "/pm/v1/category/update/"+ playlistCategory.category_id, playlistCategory)
}

export const deletePlaylistCategory = (playlistCategory :PlaylistCategoryModel) => {
  return Axios.post(baseUrl + "/pm/v1/category/delete/"+ playlistCategory.category_id)
}

export const getPlaylistCategoryByCategoryId = (category_id :string) => {
  return Axios.get(baseUrl + "/pm/v1/category/"+ category_id)
}

export const searchPlaylistCategoryByTitle = (playlistCategory :PlaylistCategoryModel) => {
  return Axios.post(baseUrl + "/pm/v1/category/search", playlistCategory)
}

export const getAllPlaylistCategory = () => {
  return Axios.get(baseUrl + "/pm/v1/category")
}

export const getAllPlaylist = (limit? :number) => {
  const param = limit == null ? "" : "?limit="+ limit;
  return Axios.get(baseUrl + "/pm/v1/playlists"+ param)
}

export const getAllPlaylistByUserId = (userid :string) => {
  return Axios.get(baseUrl + "/pm/v1/playlists/"+ userid)
}

export const createPlaylist = (userid :string, metadataid:string, categoryid :string) => {
  return Axios.post(baseUrl + `/pm/v1/playlists/${userid}/create`, { userid, metadataid, categoryid})
}

export const updatePlaylist = (userid :string, playlistid:string, title :string) => {
  return Axios.post(baseUrl + `/pm/v1/playlists/${userid}/update/${playlistid}`, {title})
}

export const deletePlaylist = (userid :string, playlistid:string) => {
  return Axios.post(baseUrl + `/pm/v1/playlists/${userid}/delete/${playlistid}`)
}