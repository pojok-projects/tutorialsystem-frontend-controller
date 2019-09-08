import React from 'react';
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
// assets
import video from '../../sample/videos/sample.mp4'

//icon
import Like from '@material-ui/icons/ThumbUp'
import Dislike from '@material-ui/icons/ThumbDown'
import Share from '@material-ui/icons/Share'  
import Report from '@material-ui/icons/Flag'

//import component
import Comment from '../comment/Comment'

// css
import './Video.css'
export default class Video extends React.Component {
  render() {
    return (
      <Grid container direction="column">
        <Grid item className="video-player">
          <video src={video} controls ></video>
        </Grid>
        <Typography variant="h6" className="title-video">
          SAMSUNG Galaxy Hm
        </Typography>
        <Typography variant="body2">
          190.000x views
        </Typography>
        <Grid item>
        <Grid container justify="flex-end" alignItems="center" className="action-icons">
                <Icon>
                  <Like></Like>
                  <span>140</span>
                </Icon>

                <Icon>
                  <Dislike></Dislike>
                  <span>10</span>
                </Icon>

                <Icon>
                  <Share></Share>
                  <span>Share</span>
                </Icon>
                <Icon>
                  <Report></Report>
                  <span>Report</span>
                </Icon>
        </Grid>
        </Grid>
        <hr/>
      <Comment />
      </Grid>
    )
  }
}