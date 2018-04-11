import React from 'react';
import styled from 'styled-components';
import { aboutCopy } from './copy';
import { SectionDescription, SectionTitle, SectionContainer, darkGray } from './styleGuide';

const About = () => (
  <SectionContainer>
    <SectionTitle>{aboutCopy.title}</SectionTitle>
    <SectionDescription>{aboutCopy.description}</SectionDescription>
    <SectionDescription>
      <Link href="https://takebackday.dea.gov/" target="__blank" rel="noopener">
        Find out more
      </Link>
    </SectionDescription>
  </SectionContainer>
);

const Link = styled.a`
  text-decoration: none;
  color: ${darkGray};
`;

export default About;
