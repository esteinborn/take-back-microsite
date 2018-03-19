import React from 'react';
import styled from 'styled-components';

const Header = () => (
  <Container>
    <Title>Take Back Day is <Date>April 28th</Date></Title>
    <Description>{descrText}</Description>
  </Container>
);

const descrText = 'takeback takeback takeback takeback takeback takeback takeback takeback takeback takeback takeback';

const Title = styled.div`
  text-align: center;
  font-size: 2em;
`;

const Date = styled.span`
  font-weight: 500;
`;

const Description = styled.div`
  font-size: .8em;
`;

const Container = styled.div`
  padding: 20px;
`;

export default Header;
