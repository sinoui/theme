import styled, { css } from 'styled-components';

interface Props {
  gutter?: number | [number, number];
}

const horizontalGutterStyle = css<{ gutter: number }>`
  width: calc(100% + ${({ gutter }) => gutter}px);
  margin: 0px -${({ gutter }) => gutter / 2}px;
  & > * {
    padding: 0 ${({ gutter }) => gutter / 2}px;
  }
`;

const gutterStyle = css<{ gutter: [number, number] }>`
  width: calc(100% + ${({ gutter }) => gutter[0]}px);
  margin: -${({ gutter }) => gutter[1] / 2} -${({ gutter }) => gutter[0] / 2}px;

  & > * {
    padding: ${({ gutter }) => gutter[1] / 2}px
      ${({ gutter }) => gutter[0] / 2}px;
  }
`;

const Row = styled.div<Props>`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  ${({ gutter }) =>
    typeof gutter === 'number'
      ? horizontalGutterStyle
      : Array.isArray(gutter) && gutterStyle};
`;

export default Row;
