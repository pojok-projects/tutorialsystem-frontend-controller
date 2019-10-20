import React, { Component } from "react";
import { Paper, Grid, Button, LinearProgress, TextField, Typography, Chip } from "@material-ui/core";
import PublicIcon from '@material-ui/icons/Public';
import { VideoModel, VideoUploadModel } from "../../models/video-upload.model";
import { ContextVideoUpload } from "./VideoUploadContext";
import { saveVideo, uploadVideo, saveVideotoPlaylist } from "../../controllers/video-manager.controller";

type FormVideoUploadProps = {
  video: VideoModel;
  id :number;
}


class FormVideoUploadComponent extends Component<FormVideoUploadProps> {
  
  state = {
    isLoading: true
  }

  

  handleChageInputField = (value :any, type :string) => {
    const [ stateCtx, setState ] :[VideoUploadModel, React.Dispatch<React.SetStateAction<VideoUploadModel>>]
          = this.context;
    const { id } = this.props;

    const setTitleorDesc = (video :VideoModel, idx :number) :VideoModel => {
      if(type === "Title" && idx === id) video.video_title = value;
      if(type === "Description" && idx === id) video.video_description = value;
      return video;
    }

    setState(oldState => (
        { ...oldState, Videos : oldState.Videos.map(setTitleorDesc) }
    ))
  }
  
  onUploadVideo = () :void => {
    const formData = new FormData();
    formData.append("file", this.props.video);
    
    this.setState({isLoading:true})
    uploadVideo(formData)
    .then(({result} :any) =>{
      const video :VideoModel = result;
      this.onSaveVideo(video);
    })
    .catch(err => alert(err.message || "an error occured."))
    .finally(() => this.setState({isLoading:false}))
    
  }

  onSaveVideo = (video :VideoModel) => {
    const [ stateCtx ] :[VideoUploadModel, React.Dispatch<React.SetStateAction<VideoUploadModel>>]
    = this.context;
    const { userid, category_id } = stateCtx.Playlist;

    video.user_id = userid;
    video.video_title = this.props.video.video_title;
    video.video_description = this.props.video.video_description;
    video.category_id = category_id;
    video.privacy = "Publik";

    this.setState({isLoading:false})
    saveVideo(video)
    .then(({result} :any) =>{ 
      this.onSaveVideotoPlaylist(result.id)
    })
    .catch(err => alert(err.message || "an error occured."))
    .finally(() => this.setState({isLoading:false}))
  }

 
  onSaveVideotoPlaylist = (metadataId :string) => {
    const [ stateCtx ] :[VideoUploadModel, React.Dispatch<React.SetStateAction<VideoUploadModel>>]
    = this.context;
    const { userid, category_id } = stateCtx.Playlist;

    this.setState({isLoading:false})
    saveVideotoPlaylist(userid,metadataId, category_id)
    .catch(err => alert(err.message || "an error occured."))
    .finally(() => this.setState({isLoading:false}))
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
            {this.state.isLoading ? <LinearProgress  style={{ height: "25px" }} /> : null }
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
                onClick={this.onUploadVideo}
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
