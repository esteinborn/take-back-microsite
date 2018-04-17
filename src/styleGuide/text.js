import React from "react";
import styled, { css } from "styled-components";
import { darkBlue, fontColor, orange } from "./colors";
import { hover, media } from "./helpers";

export const fontFamily = "Avenir, Roboto, Open Sans, Arial, sans-serif";

export const fontStyles = css`
  font-family: ${fontFamily};
  color: ${fontColor};
`;

export const SectionTitle = styled.div`
  ${fontStyles} font-weight: 500;
  text-align: center;
  font-size: 24px;
  line-height: 33px;
  ${media.tablet`
    font-size: 45px;
    line-height: 61px;
  `};
`;

export const SectionDescription = styled.p`
  ${fontStyles} font-size: 18px;
  line-height: 25px;
  margin-top: 20px;
  ${media.tablet`
    font-size: 24px;
    line-height: 33px;
    margin-top: 20px;
  `};
`;

export const Link = styled.a`
  color: ${darkBlue};
  text-decoration: none;
  ${hover`
    color: ${orange};
  `}
`;
