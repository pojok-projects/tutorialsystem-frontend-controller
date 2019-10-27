import React, { Component } from 'react';
import {
  Grid, Typography, LinearProgress, ButtonBase
}
  from '@material-ui/core';
import "./PlaylistItem.css";

class PlaylistItem extends Component {

    render() {
      return (
        <ButtonBase className="playlist-item">
          <Grid container >
            <Grid item className="playlist-item-thumbnail">
              <img src="/assets/recomended-thumbnail.jpg" width="100" alt="recomended-thumbnail.jpg" />
              <LinearProgress variant="determinate" color="secondary" value={50} />
              <div className="playlist-item-duration">4.13</div>
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

  export default PlaylistItem;