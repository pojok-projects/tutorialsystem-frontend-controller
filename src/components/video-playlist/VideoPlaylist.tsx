import React, { Component } from 'react';
import {
  Container, Paper, Grid, Typography, LinearProgress,
  Button, IconButton, Avatar, ButtonBase, TextField
}
  from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ForwardIcon from '@material-ui/icons/Reply';
import CommentIcon from '@material-ui/icons/QuestionAnswer';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import './video-playlist.css';
import { Link } from 'react-router-dom';

export class VideoPlaylist extends Component {

  render() {
    return (
      <Container maxWidth="lg" className="videoplaylist">
        <Grid container justify="space-between">
          <Grid item xs={12} md={8} className="video-player">
            <video  src="/assets/sample.mp4" controls></video>
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

class Playlist extends Component {

  state = {
    isDisplayPlaylist : true
  }

  onTogglePlaylist = () => {
    this.setState({isDisplayPlaylist: !this.state.isDisplayPlaylist})
  }

  render() {
    const {isDisplayPlaylist} =this.state
    return ( 
      <Paper className="playlist-category">
        <Grid container className="playlist-category-title">
          <Grid item container  direction="column" xs>
            <Typography variant="h6">
              Kusuka Pelangi di Awan
            </Typography>
            <Typography variant="body2" className="text-grey">
              Ini buatanku yang pertama
            </Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={this.onTogglePlaylist} className="text-grey">
              {isDisplayPlaylist ? <ExpandMoreIcon /> : <ExpandLessIcon /> }
            </IconButton>
          </Grid>
        </Grid>
        {isDisplayPlaylist ?
        <Grid container direction="column" className="playlist-content">
          <Grid item xs>
            <PlaylistItem />
          </Grid>
          <Grid item xs>
            <PlaylistItem />
          </Grid>
          <Grid item xs>
            <PlaylistItem />
          </Grid>
          <Grid item xs>
            <PlaylistItem />
          </Grid>
          <Grid item xs>
            <PlaylistItem />
          </Grid>
        </Grid> : null }
      </Paper>
    );
  }
}

class PlaylistItem extends Component {

  render() {
    return (
      <ButtonBase className="playlist-item">
        <Grid container >
          <Grid item className="playlist-item-thumbnail">
            <img src="/assets/recomended-thumbnail.jpg" width="100" alt="recomended-thumbnail.jpg" />
            <LinearProgress variant="determinate" color="secondary" value={50} />
            <div className="playlist-i-duration">4.13</div>
          </Grid>
          <Grid item className="playlist-item-title" xs>
            <Typography variant="subtitle1">
              Kusuka Pelangi di Awan
            </Typography>
            <Typography variant="subtitle2" className="text-grey">
              Ini buatanku yang pertama
            </Typography>
          </Grid>
        </Grid>
      </ButtonBase>
    );
  } 
}

class VideoPlaylistToolBar extends Component {

  render() {
    return (
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h6">
            Kusuka Pelangi di Awan Part 1
            </Typography>
          <Typography variant="body2" className="text-grey">
            1.456.620 x ditonton • 28 Feb 2019
            </Typography>
        </Grid>
        <Grid container item className="playlist-i-toolbar" alignItems="center">
            <Button className="red">
              <ThumbUpIcon></ThumbUpIcon><span>140</span>
            </Button>
            &nbsp;
              <Button >
              <ThumbDownIcon></ThumbDownIcon><span>140</span>
            </Button>
          <Grid item container justify="flex-end" xs>
            <Button >
              <ForwardIcon></ForwardIcon><span></span>
            </Button>
            &nbsp;
              <Button >
              <CommentIcon></CommentIcon><span></span>
            </Button>
            &nbsp;
              <Button >
              <MoreHorizIcon></MoreHorizIcon><span></span>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

class VideoPlaylistUser extends Component {

  render() {
    return (
      <Grid container className="playlist-user" >        
        <Avatar src="/assets/icon-user.png" alt="icon-user.png" style={{ marginRight: "10px" }} />
        <Grid item xs container justify="space-between" > 
          <Grid  item xs>
            <Typography variant="h6" style={{lineHeight: "1"}}>
              <ButtonBase>Pojokan</ButtonBase>
            </Typography>
            <Typography variant="subtitle1" className="text-grey">11,2 follower</Typography>
            <Grid item xs={12} md={11} className="playlist-description">
              <Typography variant="subtitle2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor facilis magnam nihil labore possimus accusantium eligendi explicabo, nobis, molestias delectus quaerat voluptatum vel itaque soluta? Quod id aperiam voluptatem culpa.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button className="btn-red" size="large" >Follow</Button>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

class VideoPlaylistFieldComment extends Component {

  state = {
    comment: ""
  }

  onComment = (ev :any) => {
    this.setState({comment : ev.target.value })
  }

  render() {
    const {comment} = this.state;

    return (
      <Grid container direction="column" spacing={2}>
        <Grid item container alignItems="center" >
          <Typography variant="h6">
            <ButtonBase>394 Komentar</ButtonBase>
          </Typography> &nbsp;
          <IconButton > <SortIcon /> </IconButton>
        </Grid>
        <Grid item container >
          <Grid item>
            <Avatar src="/assets/icon-user.png" alt="icon-user.png" style={{ marginRight: "10px" }} />
          </Grid>
          <Grid item xs>
            <TextField
              fullWidth
              InputLabelProps={{shrink: true}}
              placeholder="Tulis komentar disini ..."
              onChange={this.onComment}
            />
            {comment.length ? <Button variant="contained" className="btn-red btn-comment">Comment</Button> : null}
            
          </Grid> 
        </Grid>
        <VideoPlaylistComment />
        <VideoPlaylistComment />
      </Grid>
    )
  }
}

class VideoPlaylistComment extends Component {
  render() {
    return (
      <Grid item container>
        <Grid item>
          <Avatar src="/assets/icon-user.png" alt="icon-user.png" style={{ marginRight: "10px" }} />
        </Grid>
        <Grid item container xs direction="column">
          <Grid item container>
            <Typography variant="subtitle2">
              <ButtonBase><b>Pojokan</b></ButtonBase>
            </Typography>&nbsp;
            <Typography variant="subtitle2" className="text-grey">6 hari yang lalu</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              Wow hontoni subarashi<br />
              Wow hontoni subarashi<br />
              Wow hontoni subarashi
            </Typography>
          </Grid>
          <Grid item>
            <IconButton style={{ fontSize: 16 }}>
              <ThumbUpIcon style={{ fontSize: 16 }} />&nbsp;1
            </IconButton>
            <IconButton style={{ fontSize: 16 }}>
              <ThumbDownIcon style={{ fontSize: 16 }} />&nbsp;0
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default VideoPlaylist;
