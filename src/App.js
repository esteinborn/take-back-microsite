import React, { Component } from 'react';
import './App.css';
import { Nav, Header } from './layout/index'
import * as TakeBackMapComponent from 'take-back-map'

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
