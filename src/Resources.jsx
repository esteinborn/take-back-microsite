import React from 'react';
import styled from 'styled-components';
import { resourceCopy } from './copy';
import { SectionDescription, SectionTitle, SectionContainer, ctaButton, lightLightGray } from './styleGuide';

const Resources = () => (
  <Container>
    <SectionTitle>{resourceCopy.title}</SectionTitle>
    <SectionDescription>{resourceCopy.description}</SectionDescription>
    <Button href="/clear_your_cabinet_flyer.pdf" target="__blank" rel="noopener">Download</Button>
  </Container>
);

const Button = styled.a`
  ${ctaButton}
  padding: 10px;
  margin-top: 10px;
  display: inline-block;
  text-decoration: none;
`;

const Container = SectionContainer.extend`
  background-color: ${lightLightGray};
`;

export default Resources;
