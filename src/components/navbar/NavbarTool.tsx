import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import AppsIcon from '@material-ui/icons/Apps'
import AvatarUser from '../../images/1.jpg'
import SearchIcon from '@material-ui/icons/Search'
import Hidden from '@material-ui/core/Hidden'

export default class NavbarTool extends React.Component {


    render() {  
        return (
            <Grid container justify="flex-end" alignItems="center" className="navbar-tool">
                <Hidden only={['sm', 'md', 'lg', 'xl']}>
                    <IconButton><SearchIcon /></IconButton>
                </Hidden>
                <IconButton >
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <Avatar alt="Remy Sharp" src={AvatarUser} />
            </Grid>)
    }
}