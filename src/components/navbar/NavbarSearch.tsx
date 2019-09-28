import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import { InputBase, Grid, IconButton } from '@material-ui/core';
import { ArrowLeft } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search'
import './Navbar.css'

type NavbarSearchProps = {
    onBack : () => void;
}

export default class NavbarSearch extends React.Component<NavbarSearchProps> {

  render() {
    return (
      <>
      <AppBar
        className="navbar"
        color="default"
        position="fixed" >
        <Grid container className="navbar-search" alignItems="center"  justify="center">
            <Grid item>
                <IconButton onClick={this.props.onBack}>
                  <ArrowLeft />  
                </IconButton>
            </Grid>
            <Grid item xs>
                <InputBase placeholder="Search…" />
            </Grid>
            <Grid item>
                <IconButton><SearchIcon /></IconButton>
            </Grid>
        </Grid>
      </AppBar>
      
      </>)
  }
}