import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import { Nav, Header, SectionBlock } from './layout'
import * as TakeBackMapComponent from 'take-back-map'
import About from './About';
import Faq from './Faq';
import Resources from './Resources';
import Footer from './Footer';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App" id='app'>
        <Nav />
        <Content>
          <SectionBlock name='top'>
            <Header />
          </SectionBlock>
          <SectionBlock name='map'>
            <TakeBackMapComponent />
          </SectionBlock>
          <SectionBlock name='faq'>
            <Faq />
          </SectionBlock>
          <SectionBlock name='toolkit'>
            <Resources />
          </SectionBlock>
          <SectionBlock name='about'>
            <About />
          </SectionBlock>
        </Content>
        <Footer />
      </div>
    );
  }
}

const Content = styled.div`
  margin-top: 50px;
`;

export default App;
