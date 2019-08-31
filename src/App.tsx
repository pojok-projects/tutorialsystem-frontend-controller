import React from 'react';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tutorialinaja.tech 
        </p>
        <p>
        Powered by: 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ReactJS
        </a>
        </p>
      </header>
    </div>
  );
}

export default App;
