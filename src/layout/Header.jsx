import React from "react";
import styled from "styled-components";
import { headerCopy } from "../copy";
import {
  SectionTitle,
  SectionDescription,
  SectionContainerGray,
} from "../styleGuide";
import heroImage from "../assets/hero-image.png";

const Header = () => (
  <SectionContainerGray className="top-section">
    <SectionTitle>
      <div className="rotating-title">
        <p className="title">Get rid of your unused medication.</p>
        <b className="rotating-section">
          <span className="rotating-section-inner">
            Stop addiction.<br />
            Protect our waters.<br />
            End the opioid crisis.<br />
          </span>
        </b>
      </div>
    </SectionTitle>
    <div className="sub-title">The next National Prescription Drug Take Back Day is on April 28th</div>
    <Image src={heroImage} />
    <SectionDescription>{headerCopy.description}</SectionDescription>
    <SectionDescription>{headerCopy.description2}</SectionDescription>
  </SectionContainerGray>
);

const Image = styled.img`
  margin: 30px auto;
  width: 100%;
  max-width: 600px;
`;

export default Header;
