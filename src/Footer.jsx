import React from 'react';
import styled from 'styled-components';
import { SectionDescription, SectionContainer, darkGray } from './styleGuide';
import { SectionLink } from './layout/Nav';
import { footerCopy } from './copy';

const Footer = () => (
  <Container>
    <Item><SectionLink title={footerCopy.home[0]} name={footerCopy.home[1]}/></Item>
  </Container>
);

const Item = styled(SectionDescription)`
  color: white;
`;

const Container = styled(SectionContainer)`
  background-color: ${darkGray};
  height: 300px;
  text-align: left
`;

export default Footer;
