import React from 'react';
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/IconButton'
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
      <>
      <div className="video-player">
        <video src={video} controls></video>
        <h2>SAMSUNG Galaxy Hm</h2>
        <Grid container>
          <Grid item lg={7}>
            <div className="view-count">
              190.000x views
            </div>
          </Grid>
          <Grid item lg={4}>
            <Grid container spacing={10} justify-direction="flex-end" className="action-icons">
              <Grid item lg={2}>
                <Icon>
                  <Like></Like>
                  <span>140</span>
                </Icon>
              </Grid>
              <Grid item lg={2}>
                <Icon>
                  <Dislike></Dislike>
                  <span>10</span>
                </Icon>
              </Grid>
              <Grid item lg={2}>
                <Icon>
                  <Share></Share>
                  <span>Share</span>
                </Icon>
              </Grid>
              <Grid item lg={2}>
                <Icon>
                  <Report></Report>
                  <span>Report</span>
                </Icon>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr/>
      </div>
      <Comment />
      </>
    )
  }
}