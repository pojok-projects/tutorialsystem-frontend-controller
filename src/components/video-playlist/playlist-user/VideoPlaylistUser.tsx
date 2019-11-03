import React, { Component } from 'react';
import { Grid, Typography, Button, Avatar, ButtonBase } from '@material-ui/core';
import "./VideoPlaylistUser.css"

class VideoPlaylistUser extends Component {

    render() {
      return (
        <Grid container className="playlist-user" >
          <Avatar src="/assets/icon-user.png" alt="icon-user.png" style={{ marginRight: "10px" }} />
          <Grid item xs container justify="space-between" >
            <Grid item xs>
              <Typography variant="h6" style={{ lineHeight: "1" }}>
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
  
  export default VideoPlaylistUser;