import React from 'react';
import styled from 'styled-components';
import { headerCopy } from '../copy';
import { fontStyles } from '../styleGuide/text';

const Header = () => (
  <Container>
    <Title>{headerCopy.title}</Title>
    <Description>{headerCopy.description}</Description>
  </Container>
);

const Title = styled.div`
  ${fontStyles}
  text-align: center;
  font-size: 2em;
`;

const Description = styled.div`
  font-size: .8em;
`;

const Container = styled.div`
  padding: 20px;
  margin-top: 50px;
`;

export default Header;
