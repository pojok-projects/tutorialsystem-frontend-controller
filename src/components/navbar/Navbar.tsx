import React from "react";
import { Link } from "react-router-dom";
import { AppBar, IconButton, InputBase, Hidden, Grid } 
from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import NavbarTool from "./NavbarTool";
import NavbarBottom from "./NavbarBottom";
import NavbarSearch from "./NavbarSearch";
import './Navbar.css'

type NavbarProps = {
  onClickMenu(): void
}

const LogoNavbar = ({ onClickMenu } : NavbarProps) => {
  return (
    <Grid container alignItems="center"  justify="space-between">
        <Hidden only={['xs']}>
          <IconButton 
            className="menu-icon" 
            color="inherit" 
            edge="start" 
            onClick={onClickMenu}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Link to="/">
          <img src="/assets/logo-tutorialinaja.png" alt="logo-tutorialinaja.png" width="35" />
          <Hidden only={['xs','sm']}>
           <img src="/assets/title-tutorialinaja.png" alt="title-tutorialinaja.png" width="150" />
        </Hidden>
        </Link>
    </Grid>
  );
}

export default class Navbar extends React.Component<NavbarProps> {

  state = {
    displaySearch : false
  }

  toggleFormSearch = () => {
    this.setState({ displaySearch : !this.state.displaySearch })
  }

  render() {
    return (
      <>
      {!this.state.displaySearch ? <AppBar
        className="navbar"
        color="default"
        position="fixed" >
        <Grid container alignItems="center"  justify="space-between">
        <Grid item><LogoNavbar onClickMenu={this.props.onClickMenu} /></Grid>
        <Grid item xs>
            <Grid container alignItems="center"  justify="space-between">
            <Grid item xs>
            <Hidden only={['xs']} >
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
                <NavbarTool openFormSearch={this.toggleFormSearch} />
              </Grid>
            </Grid>
          </Grid>
          </Grid>
      </AppBar> : <NavbarSearch onBack={this.toggleFormSearch} /> }
      <Hidden only={['sm','md','lg', 'xl']}>
        <NavbarBottom  />
      </Hidden>
      </>)
  }
}