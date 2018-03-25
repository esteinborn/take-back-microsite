import React from 'react';
import styled from 'styled-components';
import { aboutCopy } from './copy';
import { SectionDescription, SectionTitle } from './styleGuide';

const About = () => (
  <Container>
    <SectionTitle>{aboutCopy.title}</SectionTitle>
    <SectionDescription>{aboutCopy.description}</SectionDescription>
  </Container>
);

const Container = styled.div`
  padding: 150px;
`;

export default About;
