import React from 'react';
import styled from 'styled-components';

const Nav = () => (
  <Container>
    <NavLink>Find a Location</NavLink>
    <NavLink>Texting Service</NavLink>
    <NavLink>FAQ</NavLink>
    <NavLink>Toolkit</NavLink>
    <NavLink>About</NavLink>
  </Container>
);

const NavLink = styled.div`
  font-weight: 500;
  padding: 15px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
`;
export default Nav;