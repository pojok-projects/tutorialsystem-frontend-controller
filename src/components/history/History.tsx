import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../history/history.css";
import { Link } from "react-router-dom";
import { getAllPlaylist } from "../../controllers/playlist-controller";
import ErrorMessage from "../container/ErrorMessage";

type videoGalleryState = {
  videoGalleryItems :VideoGalleryItemProp[];
  isError :boolean;
  msgError :string;
}

class History extends React.Component {

  state :videoGalleryState = {
    videoGalleryItems:[],
    isError: false,
    msgError : ""
  }

  componentDidMount(){
    getAllPlaylist()
    .then(res => res.data.data)
    .then(this.setPlaylistFromAPI)
    .catch((err :any) => this.setState({ isError: true, msgError: err.message }) )
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
    const {videoGalleryItems,isError,msgError} = this.state

    return (
      <Container maxWidth="lg" className="wrapper">
        <Grid container alignItems="flex-start" justify="center">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Grid container justify="center">
              <Grid item lg={8} md={8}>
                <Typography variant="h4" component="p">
                History
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={1} justify="center">
              {videoGalleryItems.map((videoGalleryItem :VideoGalleryItemProp) => (
                <VideoHistoryItem {...videoGalleryItem} />
              ))}
            </Grid>
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

class VideoHistoryItem extends Component<VideoGalleryItemProp> {

  render() {
    const {playlistId, title, description} = this.props;

    return(
        <Grid key={playlistId} item xs={8} sm={8} md={8} className="video-history">
            <Grid container direction="row" justify="center">
              <Grid item xs={4} sm={4} md={4}>
                <Grid item xs className="video-history-thumbnail">
                  <img src="/assets/recomended-thumbnail.jpg"  alt="recomended-thumbnail.jpg"  />
                  <span className="video-history-duration">05:30s</span>
                </Grid>
              </Grid>
              <Grid item xs={8} sm={8} md={8} direction="column" className="video-history-caption">
                <Grid className="video-history-title" >
                  <Typography variant="h5" component="h5" >
                    {title}
                  </Typography>
                </Grid>
                <Grid className="video-history-view">
                  <Typography variant="caption" >
                     user: user , view: 123 x watch
                  </Typography>
                </Grid>
                <Grid className="video-history-description">
                  <Typography variant="caption" >
                    {description}
                  </Typography>
                </Grid>
              </Grid>
          </Grid>
        </Grid>
    );
  }
}

export default History;
