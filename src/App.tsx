import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Wrapper from './components/container/Wrapper';
import DrawerMenu from './components/drawer/Drawer'

export default class App extends React.Component {
  state = {
    open: false
  }

  handleToggleMenu = () => {
    this.setState({ open: !this.state.open })
  }


  render() {
    return (
      <>
        <Navbar onClickMenu={this.handleToggleMenu} />
        <DrawerMenu open={this.state.open} onClickMenu={this.handleToggleMenu} />
        <main>
          <Wrapper />
        </main>
      </>
    )
  }
}
