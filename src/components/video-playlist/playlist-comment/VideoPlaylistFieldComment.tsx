import React, { Component } from 'react';
import {
  Grid, Typography, Button, IconButton, Avatar, ButtonBase, TextField
}
  from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import VideoPlaylistComment from "./VideoPlaylistComment";

class VideoPlaylistFieldComment extends Component {

    state = {
      comment: ""
    }
  
    onComment = (ev: any) => {
      this.setState({ comment: ev.target.value })
    }
  
    render() {
      const { comment } = this.state;
  
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
                InputLabelProps={{ shrink: true }}
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
  
  export default VideoPlaylistFieldComment;