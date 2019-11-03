import React, { Component } from 'react';
import {
  Paper, Grid, Typography, IconButton, Hidden
}
  from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PlaylistItem from "./PlaylistItem";
import "./Playlist.css"

class Playlist extends Component {

    state = {
      isDisplayPlaylist: true
    }
  
    onTogglePlaylist = () => {
      this.setState({ isDisplayPlaylist: !this.state.isDisplayPlaylist })
    }
  
    render() {
      const { isDisplayPlaylist } = this.state
      return (
        <Paper className="playlist-category">
          <Grid container className="playlist-category-title">
            <Grid item container direction="column" xs>
              <Typography variant="h6">
                Kusuka Pelangi di Awan
              </Typography>
              <Typography variant="body2" className="text-grey">
                Ini buatanku yang pertama
              </Typography>
            </Grid>
              <Hidden only={['xl', 'lg', 'md']}>
                <Grid item>
                  <IconButton onClick={this.onTogglePlaylist} className="text-grey">
                    {isDisplayPlaylist ? <ExpandMoreIcon /> : <ExpandLessIcon />}
                  </IconButton>
                </Grid>
              </Hidden>
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
            </Grid> : null}
        </Paper>
      );
    }
  }

  export default Playlist;