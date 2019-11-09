import React, { Component } from 'react';
import { Container, Paper, Typography, LinearProgress } 
      from '@material-ui/core';
import "./VideoUpload.css";
import VideoUploadBrowse from "./video-upload-browse/VideoUploadBrowse";
import VideoUploadForm from "./video-upload-form/VideoUploadForm";
import { uploadVideo } from "../../controllers/video-uploader-controller";


const ProgressUpload = ({percentageUploading} :any) => (
  <div>
    <LinearProgress 
      style={{height: "50px"}}
      variant="determinate" 
      value={percentageUploading} /> 
    <b>{percentageUploading}%</b>
  </div>
);

interface FileUpload extends File {
  path :string;
}

type VideoUploadState = {
    video?: FileUpload | Blob,
    isUploading: boolean, 
    isUploaded: boolean, 
    isError: boolean, 
    percentageUploading: number
}

class VideoUpload extends Component {

  state :VideoUploadState = {
    video: undefined,
    isUploading: false, 
    isUploaded: false, 
    isError: false,
    percentageUploading: 0
  } 

  onUploadProgress = (progressEvent :any) => {
    const proggressDivSize = progressEvent.loaded / (this.state.video as File).size;
    const percentageUploading = Math.round(proggressDivSize*100);
    this.setState({percentageUploading})
  } 

  onUpload = (ev :any) => {
    const video :Blob = ev.target.files[0]
    const formData = new FormData();
          formData.append("file", video);
    const config = { onUploadProgress: this.onUploadProgress }
    this.setState({video, isUploading: true});

    uploadVideo(formData, config)
    .then((res :any) => res.data)
    .then(this.onSuccessUploadVideo)
    .catch(() => this.setState({isError: true}))
    .finally(() => this.setState({isUploading: false}))
  }

  onSuccessUploadVideo = ({ response:{ Location, Key } } :any) => {
    this.setState( (prevState :VideoUploadState) => ({
        ...prevState,
        video: { ...prevState.video, name: Key, path: Location },
        isUploaded: true
      })
    )
  }

  render() {
    const {isUploading, video = {name: "", path: ""}, isUploaded, percentageUploading } = this.state;
    const {name, path} = (video as FileUpload);
    console.log("video", video)

    return (
      <Container maxWidth="lg" >
        <Paper className="video-upload">
          <div className="video-upload-header">
            <Typography variant="h6">Upload Video</Typography>
          </div>
          {isUploading ? <ProgressUpload percentageUploading={percentageUploading} />
            : isUploaded ? <VideoUploadForm title={name} path={path}  /> 
              : <VideoUploadBrowse onUpload={this.onUpload}/>  }
          {/* <VideoUploadForm title={name} path={path}  /> */}
        </Paper>
      </Container>
    );
  }
}

export default VideoUpload;
