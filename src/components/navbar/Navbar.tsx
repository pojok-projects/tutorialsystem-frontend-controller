import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import NavbarTool from './NavbarTool'
import './Navbar.css'

type NavbarProps = {
  onClickMenu(): void
}

export default class Navbar extends React.Component<NavbarProps> {
  render() {
    return (
      <AppBar
        color="default"
        position="fixed" >
        <Grid container className="navbar" alignItems="center"  justify="space-between">
        <Grid item>
            <IconButton className="menu-icon" color="inherit" edge="start" onClick={this.props.onClickMenu}>
              <MenuIcon />
            </IconButton>
        </Grid>
        <Grid item xs>
            <Grid container alignItems="center"  justify="space-between">
            <Grid item  xs>
            <Hidden only={['xs']}>
                <Grid container alignItems="center" justify="center" spacing={3}>
                  <Grid item  sm={10} md={7}>
                    <div className="form-search">
                    <InputBase placeholder="Search…" />
                    <IconButton><SearchIcon /></IconButton>
                    </div>
                  </Grid>
                </Grid>
              </Hidden>
              </Grid>
              <Grid item>
                <NavbarTool />
              </Grid>
            </Grid>
          </Grid>
          </Grid>
        
      </AppBar>)
  }
}