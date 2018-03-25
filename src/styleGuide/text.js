import React from 'react';
import styled, { css } from 'styled-components';
import { fontColor } from './colors';

export const fontFamily = 'Roboto, Open Sans, Arial, sans-serif';

export const fontStyles = css`
  font-family: ${fontFamily};
  color: ${fontColor};
`;

export const SectionTitle = styled.div`
  ${fontStyles}
  font-weight: 500;
  font-size: 45px;
  line-height: 61px;
  text-align: center;
`;

export const SectionDescription = styled.div`
  ${fontStyles}
  font-size: 24px;
  line-height: 33px;
`;
