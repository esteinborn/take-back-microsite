import { css } from 'styled-components';

export const hover = (...args) => css`
  &:hover {
    ${css.call(this, ...args)}
  }
`;

const BreakpointWidth = {
    tablet: 580,
    desktop: 800,
};

export const media = Object.keys(BreakpointWidth).reduce(
  (mediaQueries, label) => (
    {
      ...mediaQueries,
      [label]: (...args) => css`
        @media (min-width: ${BreakpointWidth[label]}px) {
          ${css.call(this, ...args)}
        }
      `,
    }
  ),
  {},
);
