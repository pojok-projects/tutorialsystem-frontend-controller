import { VideoUploadModel, VideoModel } from "../../models/video-upload.model";
import { saveVideo, savePlaylistCategory } from "../../controllers/video-manager.controller";

export interface IAction {
    type :string;
    video : VideoModel;
}

// export const insertNewUserAnonym = (param :VideoUploadModel) :void => {
//     const { User } = param
//     User.first_name = "Anonym";
//     User.gender = "other";
//     User.email = "pojokan@gmail.com";

//     param.IsLoading = true;
//     createNewUser(User)
//     .then( ({result}:any) => {
//         User.user_id = result.id;
//         param.IsLoading = false;
//     })
//     .catch( error => {
//         param.IsError = true;
//         param.ErrorMessage = error;
//         param.IsLoading = false;
//     })
// }

const saveVideosAction = (param :VideoUploadModel) => {
    param.Videos.forEach(video => {
        param.IsLoading = true;
        saveVideo(video)
        .then( ({result}:any) => {
            video.metadataid = result.id;
        })
        .catch( error => {
            param.IsError = true;
            param.ErrorMessage = error;
        })
        .finally(() => param.IsLoading = false )    
    })
}


export const updateVideosAction = (param :VideoUploadModel) => {

}


export const insertVideosAction = (param :VideoUploadModel) => {
    param.IsLoading = true;
    param.Playlist.status = "Publik";

    savePlaylistCategory(param.Playlist)
    .then( ({result}:any) => {
        param.Playlist.category_id = result.id;
    })
    .catch( error => {
        param.IsError = true;
        param.ErrorMessage = error;
    })
    .finally(() => param.IsLoading = false )

}

