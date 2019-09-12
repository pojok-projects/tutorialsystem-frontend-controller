import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Wrapper from "./components/container/Wrapper";
import NotFound from "./components/container/NotFound";
import DrawerMenu from "./components/drawer/Drawer";
import VideoGallery from "./components/video-gallery/VideoGallery";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

export default class App extends React.Component {
  state = {
    open: false
  };

  handleToggleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    return (
      <Router>
        <Navbar onClickMenu={this.handleToggleMenu} />
        <DrawerMenu
          open={this.state.open}
          onClickMenu={this.handleToggleMenu}
        />
        <Switch>
          <Route exact path="/" component={Wrapper} />
          <Route path="/gallery" component={VideoGallery} />
          <Route path="/index.html" component={Wrapper} />
          <Redirect from="/index.html" to="/" />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
