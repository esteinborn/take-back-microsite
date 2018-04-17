import React from 'react';
import { aboutCopy } from './copy';
import { 
  SectionDescription,
  SectionTitle,
  SectionContainerGray,
  SectionContainerConstrain,
} from './styleGuide';

const About = () => (
  <SectionContainerGray>
    <SectionContainerConstrain>
      <SectionTitle>{aboutCopy.title}</SectionTitle>
      <SectionDescription>{aboutCopy.description1}</SectionDescription>
      <SectionDescription>{aboutCopy.description2}</SectionDescription>
      <SectionDescription>{aboutCopy.description3}</SectionDescription>
      <SectionDescription>{aboutCopy.description4}</SectionDescription>
    </SectionContainerConstrain>
  </SectionContainerGray>
);

export default About;
