import React, {useState} from 'react';
// import logo from './logo.svg';
// import Portfolio from './Icons/Portfolio';
import Aside from './Components/Asidebar/Aside.jsx';
import './App.css';
import Maincomponent from './Main Components/Maincomponent.jsx';
import Menu from './Icons/Menu.jsx'
import CloseMenu from './Icons/CloseMenu.jsx'

function App() {
const [active, setActive] = useState(<Menu/>);

const ToggleMenu = () => {
  
  setActive((prev) =>{
  return  prev.type === Menu ? <CloseMenu /> : <Menu />;  
  } 
);
};
  return (
    <>
    <main className="App">
      <sapn className="menu-btn" onClick={ ToggleMenu }>
        {active}
      </sapn>
      <Aside Class={active.type === Menu ? '' : 'active' }/>
      <Maincomponent/>
      {/* <header className="App-header">
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
      </header> */}
    </main>
    </>
  );
}

export default App;
