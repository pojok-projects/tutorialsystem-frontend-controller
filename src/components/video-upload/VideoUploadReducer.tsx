import  React  from "react";
import { VideoUploadModel, VideoModel } from "../../models/video-upload.model";

interface IAction {
    type :string;
    video : VideoModel;
}

const reducer = (state :VideoUploadModel = new VideoUploadModel(), action :IAction) : VideoUploadModel => {
    switch(action.type){
        case "ADD_VIDEO":
            state.Videos.push(action.video)
            return state;
        case "SAVE_VIDEO":
            return state;
        default:
            return state;
    }
}

export const ContextVideoUpload = React.createContext<any>(new VideoUploadModel());

export const ProviderVideoUpload = ({children}:any) => {
    const contextValue = React.useReducer<React.Reducer<VideoUploadModel, IAction>>(reducer, new VideoUploadModel());
    return(
        <ContextVideoUpload.Provider value={contextValue}>
            {children}
        </ContextVideoUpload.Provider>
    );
}