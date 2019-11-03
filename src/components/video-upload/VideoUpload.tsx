import React, { Component } from 'react';
import { Container, Paper, Typography } 
from '@material-ui/core';
import "./VideoUpload.css";
import VideoUploadBrowse from "./video-upload-browse/VideoUploadBrowse";
import VideoUploadForm from "./video-upload-form/VideoUploadForm";


type VideoUploadState = {
  video :File
}

class VideoUpload extends Component {

  state = {
    video : null
  } 

  onUpload = (ev :any) => {
    const video = ev.target.files[0]
    console.log(video)
    this.setState({video})
  }

  render() {
    return (
      <Container maxWidth="lg" >
        <Paper className="video-upload">
          <div className="video-upload-header">
            <Typography variant="h6">
                Upload Video  
            </Typography>
          </div>
          {this.state.video == null ? <VideoUploadBrowse onUpload={this.onUpload}/> 
          : <VideoUploadForm /> }
        </Paper>
      </Container>
    );
  }
}

export default VideoUpload;
