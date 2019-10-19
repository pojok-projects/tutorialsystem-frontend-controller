import  React  from "react";
import { VideoUploadModel, VideoModel } from "../../models/video-upload.model";
      
interface IAction {
    type :string;
    video : VideoModel;
    value :string;
}


export const ContextVideoUpload = React.createContext<any>(null);
export const ProviderVideoUpload = ({children}:any) => {
    const contextValue = React.useState(new VideoUploadModel());
    return(
        <ContextVideoUpload.Provider value={contextValue}>
            {children}
        </ContextVideoUpload.Provider>
    );
}