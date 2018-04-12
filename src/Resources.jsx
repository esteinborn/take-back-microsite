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
  padding: 8px 15px;
  margin-top: 30px;
  display: inline-block;
  text-decoration: none;
  height: 100%;
`;

const Container = SectionContainer.extend`
  background-color: ${lightLightGray};
`;

export default Resources;
