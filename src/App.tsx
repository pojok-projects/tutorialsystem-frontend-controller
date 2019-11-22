import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Wrapper from "./components/container/Wrapper";
import ErrorMessage from "./components/container/ErrorMessage";
import DrawerMenu from "./components/drawer/Drawer";
import AboutContent from "./components/about-us/AboutContent";
import VideoGallery from "./components/video-gallery/VideoGallery";
import History from "./components/history/History";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import VideoUpload from "./components/video-upload/VideoUpload";
import VideoPlaylist from "./components/video-playlist/VideoPlaylist";


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
          <Route path="/visi-misi" component={AboutContent} />
          <Route path="/history" component={History} />
          <Redirect from="/index.html" to="/" />
          <Route path="*" component={ErrorMessage} />
        </Switch>
        </main>
      </Router>
    );
  }
}
