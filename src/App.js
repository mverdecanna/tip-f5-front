import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import SuperList from './components/SuperList';
import Home from './components/Home';
import cancha_gde from './cancha_gde.jpg';



function App() {
  return (
    <div className="App">
      {/* <img src={cancha_gde}  alt="logo"/> */}
      <Home />
    </div>
  );
}

export default App;
