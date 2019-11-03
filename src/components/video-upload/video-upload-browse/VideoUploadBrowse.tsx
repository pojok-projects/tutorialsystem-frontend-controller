import React, { Component } from 'react';
import { Grid, Typography } from '@material-ui/core';
import "./VideoUploadBrowse.css";

type VideoUploadBrowseProps = {
    onUpload : (ev :any) => void;
}

class VideoUploadBrowse extends Component<VideoUploadBrowseProps> {
    render(){
        return(
            <label>
                <input type="file" onDrag={this.props.onUpload} onChange={this.props.onUpload} />
                <Grid className="video-upload-browse" container direction="column" justify="center" alignItems="center">
                    <img src="/assets/icon-upload-video.png" width="150" alt="icon-upload-video.png" />
                    <Typography variant="h6">Drag and drop or <u>browse</u> file to upload</Typography>
                </Grid>
            </label>
        )
  }
}

export default VideoUploadBrowse;