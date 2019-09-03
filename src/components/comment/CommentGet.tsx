import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'
import UserComment from '../comment/UserComment'
import Icon from '@material-ui/core/IconButton'
import Like from '@material-ui/icons/ThumbUp'
import Dislike from '@material-ui/icons/ThumbDown'

export default class CommentGet extends Component {
  render(){
    return(
      <Grid container>
        <Grid item lg={1}>
          <UserComment />
        </Grid>
        <Grid item lg={11}>
          <Typography variant="subtitle1">
            John Doe
          </Typography>
          <Typography variant="subtitle1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typography>
          <Icon>
            <Like style={{ fontSize: 16 }}></Like>
          </Icon>
          <Icon>
            <Dislike style={{ fontSize: 16 }}></Dislike>
          </Icon>
        </Grid>
      </Grid>
    )
  }
}