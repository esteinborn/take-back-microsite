import React from 'react';
import { headerCopy } from '../copy';
import { SectionTitle, SectionDescription, SectionContainer } from '../styleGuide';

const Header = () => (
  <SectionContainer>
    <SectionTitle>{headerCopy.title}</SectionTitle>
    <SectionDescription>{headerCopy.description}</SectionDescription>
  </SectionContainer>
);

export default Header;
