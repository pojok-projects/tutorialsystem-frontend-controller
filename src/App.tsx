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
import VideoUpload from "./components/video-upload/VideoUpload";
import VideoPlaylist from "./components/video-playlist/VideoPlaylist";
import Hidden from "@material-ui/core/Hidden";

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
        <main>
        <Switch>
          <Route exact path="/" component={VideoGallery} />
          <Route path="/video-playlist" component={VideoPlaylist} />
          <Route path="/view" component={Wrapper} />
          <Route path="/upload" component={VideoUpload} />
          <Redirect from="/index.html" to="/" />
          <Route path="*" component={NotFound} />
        </Switch>
        <Hidden only={['sm','md','lg']}>
            <div className="padding-bottom-mobile">&nbsp;</div>
          </Hidden>
        </main>
      </Router>
    );
  }
}
