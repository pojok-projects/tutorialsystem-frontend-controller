import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import "VideoUploadBrowse.css";

class VideoUploadBrowse extends Component {
    render(){
        return(
        <Grid className="video-upload-browse" container direction="column" justify="center" alignItems="center">
            <img src="/assets/icon-upload-video.png" width="150" alt="icon-upload-video.png" />
            <Typography variant="h6">Drag and drop or <u>browse</u> file to upload</Typography>
        </Grid>
        )
  }
}

export default VideoUploadBrowse;