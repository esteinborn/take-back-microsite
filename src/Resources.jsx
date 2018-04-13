import React from 'react';
import styled from 'styled-components';
import { resourceCopy } from './copy';
import { SectionDescription, SectionTitle, SectionContainerGray, ctaButton } from './styleGuide';

const Resources = () => (
  <SectionContainerGray>
    <SectionTitle>{resourceCopy.title}</SectionTitle>
    <SectionDescription>{resourceCopy.description}</SectionDescription>
    <Button href={process.env.PUBLIC_URL + "/clear_your_cabinet_flyer.pdf"} target="__blank" rel="noopener">
      Download
    </Button>
  </SectionContainerGray>
);

const Button = styled.a`
  ${ctaButton}
  padding: 8px 15px;
  margin-top: 30px;
  display: inline-block;
  text-decoration: none;
  height: 100%;
`;

export default Resources;
