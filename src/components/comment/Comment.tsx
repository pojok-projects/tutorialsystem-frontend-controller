import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
//import component
import UserComment from '../comment/UserComment'
import CommentPost from '../comment/CommentPost'
import CommentGet from '../comment/CommentGet'

export default class Comment extends Component{
  render() {
    return (
      <Grid container>
        <Grid item lg={3}>
          <Typography variant="subtitle1" gutterBottom>
            579.838 Comments
          </Typography>
        </Grid>
        <Grid container>
          <UserComment />
          <CommentPost />
        </Grid>
        <Grid container>
          <CommentGet />
        </Grid>
      </Grid>
    )
  }
}
