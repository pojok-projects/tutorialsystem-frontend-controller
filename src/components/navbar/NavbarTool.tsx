import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import AppsIcon from '@material-ui/icons/Apps'
import AvatarUser from '../../images/1.jpg'

export default class NavbarTool extends React.Component {


    render() {  
        return (
            <Grid container justify="center" alignItems="center" className="navbar-tool">
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <Avatar alt="Remy Sharp" src={AvatarUser} />
            </Grid>)
    }
}