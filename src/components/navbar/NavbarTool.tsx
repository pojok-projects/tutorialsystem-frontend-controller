import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import AppsIcon from '@material-ui/icons/Apps'
import SearchIcon from '@material-ui/icons/Search'
import Hidden from '@material-ui/core/Hidden'
import { Link } from "react-router-dom";

type NavbarToolProps = {
    openFormSearch() : void;
}

export default class NavbarTool extends React.Component<NavbarToolProps> {


    render() {  
        return (
            <Grid container justify="flex-end" alignItems="center" className="navbar-tool">
                <Hidden xsUp={false} only={['sm','md','lg','xl']}>
                    <IconButton color="default" onClick={this.props.openFormSearch}>
                        <SearchIcon />
                    </IconButton>
                    <Link to="/upload">
                        <IconButton>
                            <img src="/assets/icon-upload.png" width="24" alt="icon-upload.png" />
                        </IconButton>
                    </Link>
                </Hidden>
                <Hidden only={['xs']}>
                <IconButton >
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <Avatar alt="Remy Sharp" src="/assets/user-avatar.jpg" />
                </Hidden>
            </Grid>)
    }
}