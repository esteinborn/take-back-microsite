import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { fontStyles } from '../styleGuide';

const links = [
  ['Find a Location', 'map'],
  ['Texting Service', 'text'],
  ['FAQ', 'FAQ'],
  ['Toolkit', 'toolkit'],
  ['About', 'about'],
];

const Nav = () => (
  <Container>
    {links.map(([title, name]) => (
      <NavLink
        to={name}
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={50}
        duration={500}
        isDynamic={true}
        key={name}
      >
        {title}
     </NavLink>
    ))}
  </Container>
);

const NavLink = styled(Link)`
  ${fontStyles}
  font-weight: 500;
  padding: 15px;
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
  height: 50px;
`;

export default Nav;