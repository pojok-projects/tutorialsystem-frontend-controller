import  React  from "react";
import { VideoUploadModel } from "../../models/VideoUploadModel";

export const ContextVideoUpload = React.createContext<any>(null);
export const ProviderVideoUpload = ({children}:any) => {
    const contextValue = React.useState(new VideoUploadModel());
    return(
        <ContextVideoUpload.Provider value={contextValue}>
            {children}
        </ContextVideoUpload.Provider>
    );
}