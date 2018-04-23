import React, { Component } from "react";
import "./App.css";
import { Nav, MobileNav, Header, SectionBlock } from "./layout";
import * as TakeBackMapComponent from "take-back-map";
import About from "./About";
import Faq from "./Faq";
import NYCAG from "./NYAG";
import Footer from "./Footer";

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="App" id="app" name="top">
        <Nav />
        <MobileNav />
        <div>
          <SectionBlock>
            <Header />
          </SectionBlock>
          <SectionBlock name="map">
            <TakeBackMapComponent />
          </SectionBlock>
          <SectionBlock name="faq">
            <Faq />
          </SectionBlock>
          {/* <SectionBlock name='toolkit'>
            <Resources />
          </SectionBlock> */}
          <SectionBlock name="about">
            <About />
          </SectionBlock>
          <SectionBlock name="nyag">
            <NYCAG />
          </SectionBlock>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
