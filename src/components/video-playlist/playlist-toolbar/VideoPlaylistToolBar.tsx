import React, { Component } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ForwardIcon from '@material-ui/icons/Reply';
import CommentIcon from '@material-ui/icons/QuestionAnswer';
import "./VideoPlaylistToolBar.css";

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

  export default VideoPlaylistToolBar;