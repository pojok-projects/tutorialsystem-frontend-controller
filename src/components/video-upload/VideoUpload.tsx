import React, { Component } from 'react';
import { Container, Paper, Typography } 
from '@material-ui/core';
import "./VideoUpload.css";
import VideoUploadBrowse from "./video-upload-browse/VideoUploadBrowse";
import VideoUploadForm from "./video-upload-form/VideoUploadForm";


class VideoUpload extends Component {

  render() {
    return (
      <Container maxWidth="lg" >
        <Paper className="video-upload">
          <div className="video-upload-header">
            <Typography variant="h6">
                Upload Video
            </Typography>
          </div>
          {/* <VideoUploadBrowse /> */}
          <VideoUploadForm />
        </Paper>
      </Container>
    );
  }
}

export default VideoUpload;
