import React from 'react';
import logo from './logo.svg';
import Portfolio from './Icons/Portfolio';
import Aside from './Components/Asidebar/Aside.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Aside/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Portfolio/>
        <p>
          Edit <code>App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
