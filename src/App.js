import React, { Component } from 'react';
import './App.css';
import TakeBackMapComponent from './take-back-day-mapping/src/TakeBackMapComponent';
import { Nav, Header } from './layout/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <TakeBackMapComponent />
      </div>
    );
  }
}

export default App;
