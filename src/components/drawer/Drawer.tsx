import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import HomeIcon from "@material-ui/icons/Home";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FeaturedVideoIcon from "@material-ui/icons/FeaturedVideo";
import "./Drawer.css";
import { Link } from "react-router-dom";

type DrawerMenuProps = {
  open: boolean;
  onClickMenu(): void;
};

export default class DrawerMenu extends React.Component<DrawerMenuProps> {
  render() {
    return (
      <SwipeableDrawer
        style={this.props.open ? { display: "block" } : { display: "none" }}
        onClose={this.props.onClickMenu}
        onOpen={this.props.onClickMenu}
        open={this.props.open}
      >
        <List className="list-menu">
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <Link to="/">
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
        </List>
      </SwipeableDrawer>
    );
  }
}
