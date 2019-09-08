import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import CommentPost from '../comment/CommentPost'
import CommentGet from '../comment/CommentGet'
import './Comment.css'

export default class Comment extends Component{
  render() {
    return (
      <Grid container direction="column">
          <Typography variant="subtitle1" gutterBottom>
            579.838 Comments
          </Typography>
          <CommentPost />
          <CommentGet />
      </Grid>
    )
  }
}
