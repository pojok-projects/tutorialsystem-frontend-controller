import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import Dropzone from "react-dropzone-uploader";
import { PreviewVideoUpload, BrowseVideoUpload } from "./FormVideoUpload";
import { VIDEO_UPLOAD_URL } from "../../controllers/video-manager.controller";
import SearchCategory from "../category/SearchCategory"
import "react-dropzone-uploader/dist/styles.css";
import "./video-upload.css";


export class VideoUpload extends Component {
  state = {
    config : () => ({ url : VIDEO_UPLOAD_URL })
  }

  handleChangeStatusUpload = ({ meta, file }: any, status: any) : void => {
    console.log(status, meta, file);  
  };



  render() {
    const { state, handleChangeStatusUpload } = this

    return (
      <Container maxWidth="lg" className="wrapper" >
            <Grid 
              className="video-upload-content" 
              container 
              alignItems="center" justify="center">
                  <Dropzone  
                    LayoutComponent={BrowseVideoUpload}
                    PreviewComponent={PreviewVideoUpload}
                    inputContent=""
                    getUploadParams={state.config}
                    onChangeStatus={handleChangeStatusUpload}
                    accept="video/*"
                    maxSizeBytes={50485760}
                  />
            </Grid>
      </Container>
    );
  }
}

export default VideoUpload;
