import styled, { css } from 'styled-components';
import { Theme } from '../../src/types';

type Width =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

interface Props {
  xs?: Width;
  sm?: Width;
  md?: Width;
  lg?: Width;
  xl?: Width;
}

const widthCss = css((props: Props) => {
  const width = props.xs;

  if (width > 0) {
    return `
      max-width: ${(width / 24) * 100}%;
      flex-basis: ${(width / 24) * 100}%;
      flex-grow: 0;
    `;
  }
  return null;
});

const breakpointKeys = ['sm', 'md', 'lg', 'xl'];

const breakpointsCss = css((props: Props & { theme: Theme }) => {
  return breakpointKeys
    .filter((item) => props[item] > 0)
    .reduce((result, item) => {
      // eslint-disable-next-line no-param-reassign
      result[
        `@media screen and (min-width: ${props.theme.breakpoints[item]}px)`
      ] = {
        '&': {
          width: `${(props[item] / 24) * 100}%`,
          flexBasis: `${(props[item] / 24) * 100}%`,
        },
      };
      return result;
    }, {} as any);
});

const Col = styled.div<Props>`
  flex-grow: 1;
  ${widthCss}
  ${breakpointsCss}

  box-sizing: border-box;
  margin: 0;
`;

export default Col;
