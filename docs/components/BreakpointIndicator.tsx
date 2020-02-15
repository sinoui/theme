/* eslint-disable import/no-extraneous-dependencies */
import breakpoint from 'styled-components-breakpoint';
import styled, { css } from 'styled-components';

const indicatorCss = css`
  &::after {
    content: '<--';
    color: red;
  }
`;

const BreakpointIndicator = styled.div`
  ${breakpoint('xs', 'sm')`
    &.xs {
      ${indicatorCss}
    }
  `}
  ${breakpoint('sm', 'md')`
    &.sm {
      ${indicatorCss}
    }
  `}
  ${breakpoint('md', 'lg')`
    &.md {
      ${indicatorCss}
    }
  `}
  ${breakpoint('lg', 'xl')`
    &.lg {
      ${indicatorCss}
    }
  `}
  ${breakpoint('xl')`
    &.xl {
      ${indicatorCss}
    }
  `}
`;

export default BreakpointIndicator;
