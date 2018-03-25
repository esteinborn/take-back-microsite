import React, { Component } from 'react';
import './App.css';
import { Nav, Header, SectionBlock } from './layout'
import * as TakeBackMapComponent from 'take-back-map'
import About from './About';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" id='app'>
        <Nav />
        <SectionBlock name='top'>
          <Header />
        </SectionBlock>
        <SectionBlock name='map'>
          <TakeBackMapComponent />
        </SectionBlock>
        <SectionBlock name='about'>
          <About />
        </SectionBlock>
      </div>
    );
  }
}

export default App;
