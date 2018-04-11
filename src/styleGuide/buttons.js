import { css } from 'styled-components';
import { ctaGreen } from './colors';

const button = css`
  background-color: mediumGray;
  color: white;
  border-radius: 5.5px;
  height: 40px;
  width: fit-content;
  minWidth: 115;
  padding: 0 15px;
  font-family: Avenir;
  font-size: 18px;
  font-weight: bold;
  border: none;
`;

const ctaButton = css`
  ${button}
  background-color: ${ctaGreen}
`;

export { button, ctaButton };