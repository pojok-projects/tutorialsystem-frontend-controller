import React, { Component } from "react";
import { Paper, Grid, Button, LinearProgress, TextField, Typography, Chip } from "@material-ui/core";
import PublicIcon from '@material-ui/icons/Public';
import { VideoModel, VideoUploadModel } from "../../models/video-upload.model";
import { ContextVideoUpload } from "./VideoUploadContext";

type FormVideoUploadProps = {
  video: VideoModel;
  id :number;
}


class FormVideoUploadComponent extends Component<FormVideoUploadProps> {


  componentDidMount(){
    console.log("video :", this.props.video)
  }

  handleChageInputField = (value :any, type :string) => {
    const [ stateCtx, setState ] :[VideoUploadModel, React.Dispatch<React.SetStateAction<VideoUploadModel>>]
          = this.context;
    const { id } = this.props;

    const setTitleorDesc = (video :VideoModel, idx :number) :VideoModel => {
      if(type === "Title" && idx == id) video.video_title = value;
      if(type === "Description" && idx == id) video.video_description = value;
      return video;
    }

    setState(oldState => (
        { ...oldState, Videos : oldState.Videos.map(setTitleorDesc) }
    ))
  }
  
  onSaveVideo = () :void => {

  }

  render(){
    const {video} = this.props;
    const srcVideo = URL.createObjectURL(video);
    const videoSizeToMB = (video.size / 1048576).toFixed(2)
    

  return (
    <Paper style={{ padding: "10px" }}>
      <Grid container>
        <Grid item xs sm={3}>
            <video width="250" height="150"  controls>
              <source src={srcVideo}  /> 
            </video>
          <div style={{ margin: "10px" }}>
            <Typography variant="subtitle1" >
              Format : {video.type}<br />
              Size : {videoSizeToMB} MB<br />
              <Chip
                icon={<PublicIcon />}
                label={"Status publik"}
                variant="outlined"
              />
            </Typography>
          </div>

        </Grid>
        <Grid item xs={12} sm={9}>
          <Grid container direction="column" className="form-video-upload" >
            <LinearProgress style={{ height: "25px" }} />
            <TextField
              fullWidth
              label="Title"
              value={video.video_title || ""}
              onChange={e =>  this.handleChageInputField(e.target.value,"Title") }
            />
            <TextField
              fullWidth
              label="Description"
              multiline
              rows="3"
              value={video.video_description || ""}
              onChange={e => this.handleChageInputField(e.target.value,"Description")}
            />
            <Grid container justify="flex-end">
              <Button 
                onClick={this.onSaveVideo}
                variant="contained" 
                color="primary">Save</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
}

FormVideoUploadComponent.contextType = ContextVideoUpload;

export default FormVideoUploadComponent;
