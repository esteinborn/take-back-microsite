import React from 'react';
import styled from 'styled-components';
import { SectionDescription, SectionContainer, darkGray } from './styleGuide';
import { SectionLink } from './layout/Nav';
import { footerCopy } from './copy';

const Footer = () => (
  <Container>
    <Item><SectionLink title={footerCopy.home[0]} name={footerCopy.home[1]}/></Item>
    <Item><Link href="https://ag.ny.gov/contact-attorney-general">Contact</Link></Item>
    <Item>This website was made possible through a collaboration with dedicated volunteers from New York’s tech community, <FooterLink href="https://www.progressivehacknight.org/">Progressive Hacknight</FooterLink>, and <FooterLink href="https://civichall.org/">Civic Hall</FooterLink>.</Item>
  </Container>
);

const Item = styled(SectionDescription)`
  color: white;
  padding: 5px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
`;

const FooterLink = Link.extend`
  text-decoration: underline;
`

const Container = styled(SectionContainer)`
  background-color: ${darkGray};
  height: 300px;
  min-height: 300px;
  text-align: left;
  align-items: left;
`;

export default Footer;
