import { VideoUploadModel, VideoModel } from "../../models/video-upload.model";
import { createNewUser, savePlaylist } from "../../controllers/video-manager.controller";

export interface IAction {
    type :string;
    video : VideoModel;
}

export const insertNewUserAnonym = (param :VideoUploadModel) :void => {
    const { User } = param
    User.first_name = "Anonym";
    User.gender = "other";
    User.email = "pojokan@gmail.com";

    param.IsLoading = true;
    createNewUser(User)
    .then( ({result}:any) => {
        User.user_id = result.id;
        param.IsLoading = false;
    })
    .catch( error => {
        param.IsError = true;
        param.ErrorMessage = error;
        param.IsLoading = false;
    })
}

export const createNewPlaylist = (param :VideoUploadModel) => {
    param.IsLoading = true;
    param.Playlist.status = "Publik";

    savePlaylist(param.Playlist)
    .then( ({result}:any) => {
        param.Playlist.category_id = result.id;
        param.Playlist.IsCreated = true;
        param.IsLoading = false;
    })
    .catch( error => {
        param.IsError = true;
        param.ErrorMessage = error;
        param.IsLoading = false;
    })
}

export const saveVideo = (param :VideoUploadModel) => {

}