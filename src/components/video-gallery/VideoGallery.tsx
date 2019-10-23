import React from "react";
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
import ProgressHome from "../progress/ProgressHome"


type PlaylistState = {
  playlist_id :string;
  title :string;
  description :string;
}

type videoGalleryState = {
  isCloseAbout :boolean;
  playlists :PlaylistState[];
  isLoading :boolean;
}

export default class VideoGallery extends React.Component {
  
  state :videoGalleryState = {
    isCloseAbout : false,
    playlists:[],
    isLoading:true
  }

  closeAboutUs = () => {
    this.setState({ isCloseAbout : true })
  }

  componentDidMount(){
    getAllPlaylist()
    .then(res => res.data.data)
    .then(this.setPlaylistFromAPI)
  }
  
  setPlaylistFromAPI = (data :any) => {
    
    const setPlaylist = (acc :PlaylistState[], {category,lists} :any) => {
      const convertListToPlaylist = (list :any) => {
        const playlist :PlaylistState = { playlist_id: list.id, title: category.title, description: category.description }
        return playlist;
      }
      const playlists :PlaylistState[] = lists.map(convertListToPlaylist)
      acc = acc.concat(playlists)
      return acc;
    }

    const playlists :PlaylistState[] = data.reduce(setPlaylist, [])
    this.setState({ playlists, isLoading  : false })
  }

  render() {
    const {isLoading,playlists} = this.state
    // console.log(playlists)
    
    if(isLoading){
      return(
        <ProgressHome />
      )
    }
    return (
      <Container maxWidth="lg" className="wrapper">
      <PopupWelcome />
        <Grid container alignItems="flex-start" justify="center">
          <Grid item lg={8}>
            {this.state.isCloseAbout ? "" : <AboutUs onClose={this.closeAboutUs}/> }
            <Grid container spacing={3}>
              {playlists.map((playlist :PlaylistState) => (
                <Grid key={playlist.playlist_id} item xs={12} sm={6} md={4}>
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
                                {playlist.description}
                              </Link>
                          </Typography>
                          <Typography variant="caption" >
                          {playlist.title}
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
