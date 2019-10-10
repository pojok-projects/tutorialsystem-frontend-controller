import React, { Component } from "react";
import { Container } from "@material-ui/core";
import Dropzone from "react-dropzone-uploader";
import { PreviewVideoUpload, BrowseVideoUpload } from "./FormVideoUpload";
import { VIDEO_UPLOAD_URL } from "../../controllers/video-manager.controller";
import { ContextVideoUpload, ProviderVideoUpload } from "./VideoUploadReducer";
import "react-dropzone-uploader/dist/styles.css";
import "./video-upload.css";


const VideoUpload = () => {

  const state = {
    config : () => ({ url : VIDEO_UPLOAD_URL })
  }

  const handleChangeStatusUpload = ({ meta, file }: any, status: any) : void => {
    console.log(status, meta, file);  
  };    

    return (
      <Container maxWidth="lg" className="wrapper video-upload-border" >
              <Dropzone  
                LayoutComponent={BrowseVideoUpload}
                PreviewComponent={PreviewVideoUpload}
                inputContent=""
                getUploadParams={state.config}
                onChangeStatus={handleChangeStatusUpload}
                accept="video/*"
                maxSizeBytes={50485760}
              />
      </Container>
    );
}


const ContainerVideoUpload = () => {
  return (
    <ProviderVideoUpload>
      <VideoUpload />
    </ProviderVideoUpload>

  )
}

export default ContainerVideoUpload;
