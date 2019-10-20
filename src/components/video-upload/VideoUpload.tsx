import React, { Component } from "react";
import { Container, Typography, Button, Grid, Dialog, DialogActions, Slide,
    DialogTitle, DialogContent, TextField  } from "@material-ui/core";
import { TransitionProps } from '@material-ui/core/transitions';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { VideoModel, VideoUploadModel } from "../../models/video-upload.model";
import { getCategories, savePlaylistCategory } from "../../controllers/video-manager.controller";
import FormVideoUploadComponent from "./FormVideoUpload";
import { ProviderVideoUpload, ContextVideoUpload } from "./VideoUploadContext";
import "./video-upload.css";


const BrowseVideoComponent = ({handleInputVideo} :any) => {
  return (
      <label className="form-browse">
        <Grid container direction="column" justify="center" alignItems="center" >
            <input type="file"  onChange={handleInputVideo} />
            <img src="/assets/icon-add-video.png" width="200"  alt="video-upload" /><br/>
            <Typography variant="subtitle1">
              Drop File to Upload Or <Button >Browse file</Button>
            </Typography> 
        </Grid>
      </label>
  )
}


const Transition = React.forwardRef<undefined, TransitionProps>(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormPlaylistComponent = ({open,handleClose } :any) => {
  
  const [ { Playlist }, setStateCtx ] :[VideoUploadModel, React.Dispatch<React.SetStateAction<VideoUploadModel>>]
      = React.useContext(ContextVideoUpload);
  const [ isLoading, setLoading ] = React.useState(false);

  const onChangeInputField = (type :string, value :any) => {
    setStateCtx( prevState => ({
        ...prevState,
        Playlist: {...Playlist, [type]: value }
      }));
  }
 
  const onCreatePList = () => {
    setLoading(true);

    savePlaylistCategory(Playlist)
    .then(({result} :any) => {
      onChangeInputField("category_id", result.id)
      handleClose()

    })
    .catch(err => alert(err.message || "an error occured."))
    .finally(() => setLoading(false))
    
  }

  const isDisabledBtn = () :boolean => {
    return isLoading || Playlist.description === "" || Playlist.title === "";
  }

  return(
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
            >
                <DialogTitle>
                        Create Playlist
                </DialogTitle>
                <DialogContent style={{width:"300px"}}>
                  <Grid container direction="column">
                <TextField
                    fullWidth
                    label="Title"
                    value={Playlist.title}
                    onChange={e =>  onChangeInputField("title", e.target.value)}
                  />

                  <TextField
                    fullWidth
                    label="Description"
                    multiline
                    rows="3"
                    value={Playlist.description}
                    onChange={e => onChangeInputField("description", e.target.value)}
                  />
                  </Grid>
                </DialogContent>
                <DialogActions>
                    <Button 
                        variant="contained" 
                        onClick={onCreatePList} color="primary" 
                        disabled={isDisabledBtn()}>
                      {isLoading? "Loading..." : "Create" }
                    </Button>
                </DialogActions>
            </Dialog>
  )
}



class VideoUploadComponent extends Component {

  state = {
    isDisplayFormPList : false,
    categories: []
  }
  
    
  componentDidMount(){
    getCategories() 
    .then( ({result}) => this.setState({categories : result }) )
    .catch(err => alert(err.message || "an error occured."))
  }


  handleInputVideo = (event :any) => {
    const video :VideoModel =  event.target.files[0];
    const [ state, setState ] :[VideoUploadModel, React.Dispatch<React.SetStateAction<VideoUploadModel>>] 
      = this.context;

    setState({
      ...state, 
      Videos: [...state.Videos, video]
    })

    if(state.Playlist.category_id === "")
      this.setState({isDisplayFormPList:true})
  }


  closeFormPList = () => {
    this.setState({isDisplayFormPList:false})
  }

  render(){
    const { isDisplayFormPList, categories } = this.state;
    const [ {Videos} ] = this.context;

    return (
      <Container maxWidth="lg" 
        className={Videos.length ?  "video-upload video-upload-border-none" : "video-upload"}>
      {Videos.length === 0 ? 
        <BrowseVideoComponent handleInputVideo={this.handleInputVideo} /> :
        <>
          <FormPlaylistComponent 
            categories={categories}
            open={isDisplayFormPList} 
            handleClose={this.closeFormPList}
            />

          <label className="add-video-btn">
            <CloudUploadIcon /> &nbsp;Add Video
            <input type="file"  onChange={this.handleInputVideo} style={{display:"none"}} />
          </label>

          {Videos.map( (video :VideoModel, idx :number) => (
          <FormVideoUploadComponent 
            key={idx}
            id={idx}
            video={video}
            />
            ))}
        </>
      }
      </Container>
    );
  }
}

VideoUploadComponent.contextType = ContextVideoUpload;

const ContainerVideoUpload = () => {
  return (
    <ProviderVideoUpload>
      <VideoUploadComponent />
    </ProviderVideoUpload>
  )
}

export default ContainerVideoUpload;
