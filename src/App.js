import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import Link from 'react-router-dom';
import Main from './Main';


class App extends Component {  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Instagramm-App </h1>
        </header>
        <div style = {{textAlign: "center"}}>
          <Main />                
        </div>
      </div>
    );
  }

}

export default App;
