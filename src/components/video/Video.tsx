import React from 'react';
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// assets
import video from '../../sample/videos/sample.mp4'

//icon
import Like from '@material-ui/icons/ThumbUp'
import Dislike from '@material-ui/icons/ThumbDown'
import Share from '@material-ui/icons/Share'  
import Report from '@material-ui/icons/Flag'
import Divider from '@material-ui/core/Divider'

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
        <Grid container justify="flex-end" alignItems="center" className="action-icons">
                <Button size="small">
                  <Like></Like>&nbsp;
                  <span>140</span>
                </Button>
                <Button size="small">
                  <Dislike></Dislike>&nbsp;
                  <span>10</span>
                </Button>
                <Button size="small">
                  <Share></Share>&nbsp;
                  <span>Share</span>
                </Button>
                <Button size="small">
                  <Report></Report>&nbsp;
                  <span>Report</span>
                </Button>
        </Grid>
        <Divider className="border-comment" />
      <Comment />
      </Grid>
    )
  }
}