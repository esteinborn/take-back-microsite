import React, { Component } from 'react';
import './App.css';
import { Nav, Header } from './layout/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <MapPlaceholder />
      </div>
    );
  }
}

const MapPlaceholder = () => (
  <div style={{height: '500px', textAlign: 'center', backgroundColor: '#ededed'}}>
    Map goes here
  </div>
);

export default App;
