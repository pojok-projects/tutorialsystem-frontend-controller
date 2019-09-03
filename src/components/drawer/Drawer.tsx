import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import FeaturedVideoIcon from '@material-ui/icons/FeaturedVideo';
import './Drawer.css'


type DrawerMenuProps = {
    open : boolean;
    onClickMenu() : void
}

export default class DrawerMenu extends React.Component<DrawerMenuProps> {
    render() {
        return (<Drawer
            style={ (this.props.open) ? { display:"block" } : { display:"none" } } 
            variant="persistent"
            anchor="left"
            open={this.props.open} >
            <div style={{ padding:"10px 15px", width:"200px" }}>
                
            <IconButton onClick={this.props.onClickMenu}>
                <ChevronLeftIcon />
            </IconButton>
            </div>
            <Divider />
            <List >
                <ListItem button key="Home">
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button key="Video Gallery">
                    <ListItemIcon><FeaturedVideoIcon /></ListItemIcon>
                    <ListItemText primary="Video Gallery" />
                </ListItem>
            </List>
        </Drawer>)
    }
}