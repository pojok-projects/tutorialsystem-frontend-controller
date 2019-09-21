import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import './Navbar.css'

export default class NavbarBottom extends React.Component {
  render() {
    return (
      <AppBar
        className="navbar navbar-bottom"
        color="default"
        position="fixed" >
        <Grid container alignItems="center"  justify="space-between">
            <Grid item xs>
                <Grid container direction="column" alignItems="center" justify="center">
                        <img src="/assets/icon-home.png" alt="icon-home.png" />
                        <Typography className="home-red" variant="caption">Home</Typography>
                </Grid>
            </Grid>
            <Grid item xs>
            <Grid container direction="column" alignItems="center" justify="center">
                        <img src="/assets/icon-playlist.png" alt="icon-playlist.png" />
                        <Typography variant="caption">Playlist</Typography>
                </Grid>
            </Grid>
            <Grid item xs>
            <Grid container direction="column" alignItems="center" justify="center">
                        <img src="/assets/icon-settings.png" alt="icon-settings.png" />
                        <Typography variant="caption">Settings</Typography>
                </Grid>
            </Grid>
            <Grid item xs>
            <Grid container direction="column" alignItems="center" justify="center">
                        <img src="/assets/icon-user.png" alt="icon-user.png" />
                        <Typography variant="caption">User</Typography>
                </Grid>
            </Grid>
        </Grid>
      </AppBar>)
  }
}