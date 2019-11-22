import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MorevertIcon from "@material-ui/icons/MoreVert";
import "../video-gallery/video-gallery.css";
import { Link } from "react-router-dom";
import Recomended from "../recomended/Recomended";
import PopupWelcome from "../popup-welcome/PopupWelcome";
import AboutUs from "../about-us/AboutUs";
import { getAllPlaylist } from "../../controllers/playlist-controller";
import ProgressHome from "./ProgressHome";
import ErrorMessage from "../container/ErrorMessage";

type videoGalleryState = {
  isCloseAbout :boolean;
  videoGalleryItems :VideoGalleryItemProp[];
  isLoading :boolean;
  isError :boolean;
  msgError :string;
}

class VideoGallery extends React.Component {

  state :videoGalleryState = {
    isCloseAbout : false,
    videoGalleryItems:[],
    isLoading:true,
    isError: false,
    msgError : ""
  }

  closeAboutUs = () => {
    this.setState({ isCloseAbout : true })
  }

  componentDidMount(){
    getAllPlaylist()
    .then(res => res.data.data)
    .then(this.setPlaylistFromAPI)
    .catch((err :any) => this.setState({ isError: true, msgError: err.message }) )
    .finally(() => this.setState({ isLoading: false }) )
  }

  setPlaylistFromAPI = (data :any) => {
    data  = data.map(({category, lists } :any) => (lists.map((p :any) => {
                      return({
                        playlistId: p.id,
                        title: category.title,
                        description: category.description
                      })})));

    const videoGalleryItems :VideoGalleryItemProp[] = data.reduce( (acc :any, item :any) => acc.concat(item), [])
    this.setState({ videoGalleryItems })
  }

  render() {
    const {isLoading,videoGalleryItems,isError,msgError} = this.state

    if(isLoading){
      return(<ProgressHome />)
    }else if(isError){
      return (<ErrorMessage message={msgError} />)
    }

    return (
      <Container id="kacang" maxWidth="lg" className="wrapper coba">
      <PopupWelcome />
        <Grid container alignItems="flex-start" justify="center">
          <Grid item lg={8}>
            {this.state.isCloseAbout ? "" : <AboutUs onClose={this.closeAboutUs}/> }
            <Grid container spacing={3}>
              {videoGalleryItems.map((videoGalleryItem :VideoGalleryItemProp) => (
                <VideoGalleryItem {...videoGalleryItem} />
              ))}
            </Grid>
          </Grid>
          <Grid item lg={4}>
            <Recomended />
          </Grid>
        </Grid>
      </Container>
    );
  }
}


type VideoGalleryItemProp = {
  playlistId :string;
  title :string;
  description :string;
}

class VideoGalleryItem extends Component<VideoGalleryItemProp> {

  render() {
    const {playlistId, title, description} = this.props;

    return(
        <Grid key={playlistId} item xs={12} sm={6} md={4}>
            <Grid container direction="column" className="video-gallery">
              <Grid item xs className="video-gallery-thumbnail">
                <img src="/assets/recomended-thumbnail.jpg"  alt="recomended-thumbnail.jpg"  />
                <span className="video-gallery-duration">05:30s</span>
              </Grid>
              <Grid item xs>
              <Grid container alignItems="flex-start" justify="flex-start">
                <IconButton>
                  <img src="/assets/icon-user.png" className="video-gallery-user" alt="icon-user.png" />
                </IconButton>
                <Grid item xs>
                  <Grid container direction="column" className="video-gallery-title">
                    <Typography variant="subtitle2" >
                        <Link to={"/video-playlist/"}>
                          {description}
                        </Link>
                    </Typography>
                    <Typography variant="caption" >
                    {title}
                    </Typography>
                  </Grid>
                </Grid>
                <IconButton>
                  <MorevertIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default VideoGallery;
