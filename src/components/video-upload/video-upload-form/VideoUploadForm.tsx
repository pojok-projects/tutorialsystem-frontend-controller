import React, { Component } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import "./VideoUploadForm.css";
import CategoryField from "./CategoryField";
import { VideoModel } from '../../../models/VideoModel';
import { saveMetadataVideo } from '../../../controllers/video-manager-controller';
import { createPlaylist } from '../../../controllers/playlist-controller';

export type VideoUploadFormProps = {
  title :string;
  path :string;
}

class VideoUploadForm extends Component<VideoUploadFormProps> {

  state = {
    title: "",
    description: "",
    format: ""
  }

  componentDidMount(){
    let nameWithoutFormat = this.props.title.split(".");
    const format = nameWithoutFormat.splice(-1, 1).toString();
    const title = nameWithoutFormat.join(".");

    this.setState({title, format})
  }

  onSaveMetadataVideo = () => {
    const video :VideoModel = {
      file_name: this.state.title,
      file_path : this.props.path,
      format: this.state.format,
      size: 0,
      duration: 0,
      resolution: ""
    };
    const userId = "e63d1115-8c27-4809-a01b-4cf511ede82c";
    const categoryId = ""

    saveMetadataVideo(userId, video)
    .then(({result: {video_id}} :any) => 
      createPlaylist(userId, video_id, categoryId)
      .then(() => alert("sukses tersimpan "+ this.state.title))
    )
  }

    render(){
      const {title, description} = this.state;

        return(
            <Grid container className="video-upload-form" >
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
              <Typography variant="subtitle2">Title (Required)</Typography>
              <TextField
                  fullWidth
                  label=""
                  variant="outlined"
                  multiline
                  rows="2"
                  InputLabelProps={{ shrink: true }}
                  value={title}
                  onChange={({target: {value}} :any) => this.setState({title: value})}
                />
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="subtitle2">Description (Required)</Typography>
              <TextField
                  fullWidth
                  label=""
                  variant="outlined"
                  multiline
                  rows="4"
                  InputLabelProps={{ shrink: true }}
                  value={description}
                  onChange={({target: {value}} :any) => this.setState({description: value})}
                />
            </Grid>
            <Grid item xs={12} md={10}>
              <Typography variant="subtitle2">Select Categories (Required)</Typography>
              <CategoryField />
            </Grid>
            <Grid container item xs={12} md={10} >
              <Grid xs={6} sm={4} md={2} className="video-upload-form-thumbnail" item  container justify="center" alignItems="center" direction="column">
                <img src="/assets/icon-upload-image.png" alt="icon-upload-image.png" />
                <Typography variant="subtitle2">Upload Thumbnail</Typography>
              </Grid>
              <Grid xs={6} sm={4} md={2} className="video-upload-form-thumbnail b-0" item  container justify="center" alignItems="center" direction="column">
                <img src="/assets/recomended-thumbnail.jpg" width="100%" height="100%" alt="icon-upload-image.png" />
              </Grid>
              <Grid xs={6} sm={4} md={2} className="video-upload-form-thumbnail b-0" item  container justify="center" alignItems="center" direction="column">
                <img src="/assets/recomended-thumbnail.jpg" width="100%" height="100%" alt="icon-upload-image.png" />
              </Grid>
            </Grid>
            <Grid container justify="space-between" alignItems="center"  style={{ marginTop: "10px" }}>
              <Button >Cancel</Button>
              <Button variant="contained" className="btn-publish" onClick={this.onSaveMetadataVideo} >Publish</Button>
            </Grid>
        </Grid>
        )
  }
}

export default VideoUploadForm;