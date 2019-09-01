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
        <Grid container className="navbar">
          <Grid item xs={1}>
            <IconButton className="menu-icon" color="inherit" edge="start" onClick={this.props.onClickMenu}>
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={11}>
            <Grid container justify="space-between" >
            <Hidden only={['xs']}>
            <Grid item  sm={8} md={7} className="form-search">
              <InputBase placeholder="Search…" />
              <IconButton><SearchIcon /></IconButton>
            </Grid>
            </Hidden>
            <Grid item xs={12} sm={4} md={5}>
              <NavbarTool />
            </Grid>
            </Grid>
          </Grid>
        </Grid>

      </AppBar>)
  }
}