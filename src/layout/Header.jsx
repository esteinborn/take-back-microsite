import React from 'react';
import styled from 'styled-components';
import { headerCopy } from '../copy';
import { SectionTitle, SectionDescription, SectionContainerGray } from '../styleGuide';
import heroImage from '../assets/hero-image.png'

const Header = () => (
  <SectionContainerGray>
    <SectionTitle>{headerCopy.title}</SectionTitle>
    <Image src={heroImage} />
    <SectionDescription>{headerCopy.description}</SectionDescription>
  </SectionContainerGray>
);

const Image = styled.img`
  margin: 30px auto;
  width: 100%;
  max-width: 600px;
`;

export default Header;
