import React, { Component } from 'react';
import { Grid, Typography, IconButton, Avatar, ButtonBase } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';


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

  export default VideoPlaylistComment;