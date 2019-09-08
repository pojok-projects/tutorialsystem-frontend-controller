import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
//component userProfile
import Avatar from '@material-ui/core/Avatar'
import AvatarUser from '../../images/1.jpg'

export default class UserComment extends Component {
  render() {
    return (
      <Grid item >
        <Avatar alt="Remy Sharp" src={AvatarUser} />
      </Grid>
    )
  }
}