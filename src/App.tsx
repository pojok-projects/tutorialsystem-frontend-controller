import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Wrapper from './components/container/Wrapper';
import DrawerMenu from './components/drawer/Drawer'
import VideoGllery from './components/video-gallery/VideoGallery'
import { BrowserRouter as Router, Route } from 'react-router-dom'

export default class App extends React.Component {
  state = {
    open: false
  }

  handleToggleMenu = () => {
    this.setState({ open: !this.state.open })
  }


  render() {
    return (
      <Router>
        <Navbar onClickMenu={this.handleToggleMenu} />
        <DrawerMenu open={this.state.open} onClickMenu={this.handleToggleMenu} />
        <main>
        <Route exact path="/" component={Wrapper} />
        <Route path="/gallery" component={VideoGllery} />
          {/* <Wrapper /> */}
        </main>
      </Router>
    )
  }
}
