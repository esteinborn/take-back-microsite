import React from 'react';
import { aboutCopy } from './copy';
import { SectionDescription, SectionTitle, SectionContainer } from './styleGuide';

const About = () => (
  <SectionContainer>
    <SectionTitle>{aboutCopy.title}</SectionTitle>
    <SectionDescription>{aboutCopy.description}</SectionDescription>
  </SectionContainer>
);

export default About;
