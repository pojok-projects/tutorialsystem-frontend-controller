import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import InputBase from '@material-ui/core/InputBase'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import Grid from '@material-ui/core/Grid'
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
        <div className="navbar">
          <IconButton className="menu-icon" color="inherit" edge="start" onClick={this.props.onClickMenu}>
            <MenuIcon />
          </IconButton>
          <Grid container alignItems="center" justify="space-between" direction="row" >
          <form className="form-search">
            <InputBase placeholder="Search…" />
            <IconButton><SearchIcon /></IconButton>
          </form>

          <NavbarTool/>
          </Grid>
        </div>
      </AppBar>)
  }
}