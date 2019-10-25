import React, {Component} from 'react';
import { Container, Paper, Grid, Typography, LinearProgress, Button, Divider, Avatar } 
  from '@material-ui/core';
import './video-playlist.css';

// Icon
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ForwardIcon from '@material-ui/icons/Reply';
import CommentIcon from '@material-ui/icons/QuestionAnswer';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

import {Link} from 'react-router-dom';

export class VideoPlaylist extends Component {

  render() {
    return (
      <Container maxWidth="lg" className="wrapper">
        <Grid container justify="space-between">
          <Grid item xs lg={8} >
            <video style={{width: "100%"}} src="/assets/sample.mp4" controls></video>
          </Grid>
          <Grid item xs lg={4}>
            <Playlist />      
          </Grid>
        </Grid>
        <Grid container  direction="column" style={{marginTop: "15px"}}>
          <Grid item lg={8}>
            <VideoPlaylistToolBar />
            <br />
            <Divider />
            <VideoPlaylistUser />
            <br />
            <Divider />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

class Playlist extends Component {

  render() {
    return(
    <Paper style={{marginLeft: "20px" }}>
      <div className="playlist-category">
          <Typography variant="h6">
            Kusuka Pelangi di Awan
          </Typography>
          <Typography variant="body2">
            Ini buatanku yang pertama
          </Typography>
      </div>
      <Grid container direction="column" className="content-pl-item">
        <Grid item>
          <PlaylistItem />
        </Grid>
        <Grid item>
          <PlaylistItem />
        </Grid>
        <Grid item>
          <PlaylistItem />
        </Grid>
        <Grid item>
          <PlaylistItem />
        </Grid>
        <Grid item>
          <PlaylistItem />
        </Grid>
      </Grid>
    </Paper>
    );
  }
}

class PlaylistItem extends Component {

  render() {
    return(
      <Grid container className="playlist-item">
        <Grid item className="playlist-item-thumbnail">
          <img src="/assets/recomended-thumbnail.jpg" width="100" alt="recomended-thumbnail.jpg" />
          <LinearProgress variant="determinate" color="secondary" value={50} />
          <div className="pl-i-duration">4.13</div>
        </Grid>
        <Grid item className="playlist-item-title">
          <Typography variant="h6">
            Kusuka Pelangi di Awan
          </Typography>
          <Typography variant="subtitle2">
            Ini buatanku yang pertama
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

class VideoPlaylistToolBar extends Component {

  render() {
    return (
        <Grid container  direction="column">
            <Typography variant="h6">
              Kusuka Pelangi di Awan Part 1
            </Typography>
          <Grid item>
            <Typography variant="body2">
              1.456.620 x ditonton • 28 Feb 2019
            </Typography>
          </Grid>
          <Grid container className="pl-i-toolbar" justify="space-between" alignItems="center">
            <div>
              <Button size="small" className="red">
                <ThumbUpIcon></ThumbUpIcon>&nbsp;<span>140</span>
              </Button>
              &nbsp;
              <Button size="small">
                <ThumbDownIcon></ThumbDownIcon>&nbsp;<span>140</span>
              </Button>
            </div>
            <div>
              <Button size="small">
                <ForwardIcon></ForwardIcon>
              </Button>
              &nbsp;
              <Button size="small">
                <CommentIcon></CommentIcon>
              </Button>
              &nbsp;
              <Button size="small">
                <MoreHorizIcon></MoreHorizIcon>
              </Button>
            </div>
          </Grid>
        </Grid>
    );
  }
}

class VideoPlaylistUser  extends Component {

  render() {
    return (
      <Grid container  justify="space-between" alignItems="center" style={{marginTop: "10px"}}>
        <Avatar src="/assets/icon-user.png" alt="icon-user.png"  style={{marginRight: "10px"}}/>
        <Grid item xs >
          <Typography variant="h6">Pojokan</Typography>
          <Typography variant="subtitle1">11,2 follower</Typography>
        </Grid>
        <Button className="btn-red" size="large" >Follow</Button>
      </Grid>
      )
  }
}

export default VideoPlaylist;
