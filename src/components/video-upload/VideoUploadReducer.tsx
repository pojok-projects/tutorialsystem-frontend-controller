import  React  from "react";
import { VideoUploadModel } from "../../models/video-upload.model";
import { insertVideosAction, updateVideosAction, IAction } from "./VideoUploadAction";
        
const reducer = (state :VideoUploadModel = new VideoUploadModel(), action :IAction) : VideoUploadModel => {
    const { User, Playlist } = state;
    
    if(action.type === "SAVE_VIDEO"){
       if(Playlist.isCreated()){
            insertVideosAction(state);        
        }else{
            updateVideosAction(state);
        }
        return state;
    }else{
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