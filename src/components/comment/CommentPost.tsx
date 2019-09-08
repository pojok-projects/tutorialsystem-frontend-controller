import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import UserComment from '../comment/UserComment'

export default class CommentPost extends Component{
  state = {
    visiableActionButton : false
  }

handleFocusComment = () => {
  this.setState({ visiableActionButton : true })
}

handleCancelComment = () => {
  this.setState({ visiableActionButton : false })
}

  render(){
    return(
        <Grid container direction="column" className="comment-post">
          <Grid container direction="row" spacing={2} alignItems="center" justify="space-between">
            <UserComment />
            <Grid item xs>
            <TextField  
            id="standard-full-width"
            placeholder="Add a public comment"
            fullWidth
            InputLabelProps={{
                shrink: true,
            }}
            onFocus={this.handleFocusComment}
            />
            </Grid>
          </Grid>
          {this.state.visiableActionButton ? <Grid container alignItems="center" justify="flex-end"> 
              <Button size="medium" onClick={this.handleCancelComment}>cancel</Button>&nbsp;
              <Button variant="contained" size="medium" color="primary">
              Submit</Button> 
        </Grid>: "" }
      </Grid>
    )
  }
}
