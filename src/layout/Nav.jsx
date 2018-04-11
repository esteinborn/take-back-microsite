import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { fontStyles, hover, lightLightGray, media } from '../styleGuide';

const links = [
  ['Find a Location', 'map'],
  ['Texting Service', 'text'],
  ['FAQ', 'faq'],
  ['Toolkit', 'toolkit'],
  ['About', 'about'],
];

const Nav = () => (
  <Container>
    {links.map(([title, name]) => (<NavLink name={name} title={title}/>))}
  </Container>
);

export const SectionLink = ({ name, title, ...props }) => (
  <Link
    to={name}
    spy={true}
    smooth={true}
    hashSpy={true}
    offset={-60}
    duration={500}
    isDynamic={true}
    key={name}
    {...props}
  >
    {title}
  </Link>
);

const NavLink = styled(SectionLink)`
  ${fontStyles}
  font-weight: 500;
  font-size: 18px;
  padding: 5px;
  cursor: pointer;
  ${hover`
    background-color: ${lightLightGray};
  `}
  ${media.desktop`
    padding: 15px;
    font-size: 24px;
  `}
  
`;



const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  position: fixed;
  background-color: white;
  width: 100%;
  top: 0;
  z-index: 10;
  height: 60px;
`;

export default Nav;