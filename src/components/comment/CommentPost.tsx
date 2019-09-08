import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import UserComment from '../comment/UserComment'

export default class CommentPost extends Component{
  render(){
    return(
        <Grid container direction="column">
          <Grid container direction="row" alignItems="center" justify="space-between">
            <UserComment />
            <Grid item xs>
            <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            placeholder="Add a public comment"
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            />
            </Grid>
          </Grid>
          <Grid container alignItems="center" justify="flex-end"> 
              <Button size="medium">
              cancel
              </Button>
              <Button variant="contained" size="medium" color="primary">
              Submit
              </Button>
        </Grid>
      </Grid>
    )
  }
}
