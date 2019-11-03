import React, { Component } from 'react';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import "./VideoUploadForm.css";
import CategoryField from "./CategoryField";

class VideoUploadForm extends Component {
    render(){
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
                  required
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
                  required
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
              <Button variant="contained" className="btn-publish">Publish</Button>
            </Grid>
        </Grid>
        )
  }
}

export default VideoUploadForm;