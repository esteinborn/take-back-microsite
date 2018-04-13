import React from "react";
import styled from "styled-components";
import { media } from './helpers';
import { lightLightGray } from './index';

export const SectionContainer = styled.div`
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 20px 10px;
  ${media.tablet`
    min-height: 600px;
    padding: 50px 30px;
  `}
`;

export const SectionContainerGray = SectionContainer.extend`
  background-color: ${lightLightGray};
`;
