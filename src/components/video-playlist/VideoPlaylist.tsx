import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import Playlist from "./playlist/Playlist";
import VideoPlaylistToolBar from "./playlist-toolbar/VideoPlaylistToolBar";
import VideoPlaylistUser from "./playlist-user/VideoPlaylistUser";
import VideoPlaylistFieldComment from "./playlist-comment/VideoPlaylistFieldComment";
import './VideoPlaylist.css';
import { Link } from 'react-router-dom';


export class VideoPlaylist extends Component {

  render() {
    return (
      <Container maxWidth="lg" className="videoplaylist">
        <Grid container justify="space-between">
          <Grid item xs={12} md={8} className="video-player">
            <video src="/assets/sample.mp4" controls></video>
          </Grid>
          <Grid item xs={12} md={4}>
            <Playlist />
          </Grid>
        </Grid>
        <Grid container direction="column" className="palylist-toolbar" >
          <Grid item lg={8}>
            <VideoPlaylistToolBar />
            <VideoPlaylistUser />
            <VideoPlaylistFieldComment />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default VideoPlaylist;
