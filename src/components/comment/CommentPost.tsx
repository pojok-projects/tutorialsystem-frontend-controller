import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

export default class CommentPost extends Component{
  render(){
    return(
      <Grid item xs={11}>
        <Grid container>
          <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          placeholder="Add a public comment"
          fullWidth
          InputLabelProps={{
              shrink: true,
          }}
          />
          <Grid container> 
            <Grid item lg={10}>
              <Button size="large" style={{float: "right"}}>
              cancel
              </Button>
            </Grid>
            <Grid item lg={2}>
              <Button variant="contained" size="large" color="primary" style={{float: "right"}}>
              Submit
              </Button>
            </Grid>
        </Grid>
      </Grid>
    </Grid>
    )
  }
}
