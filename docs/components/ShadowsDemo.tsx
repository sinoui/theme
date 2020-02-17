import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import DemoCard from './DemoCard';

const Box = styled.div<{ elevation: number }>`
  box-sizing: border-box;
  height: 80px;
  width: 80px;
  margin: 36px;
  background-color: ${({ theme }) => theme.palette.background.paper};
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: ${({ theme }) => theme.typography.body1.fontSize};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme, elevation }) => theme.shadows[elevation]};
  border-radius: 4px;
  ${({ elevation, theme }) =>
    elevation === 0 &&
    `
    border: 1px solid ${theme.palette.divider};
  `}
`;

export default function ShadowsDemo() {
  const { shadows } = useContext(ThemeContext);
  const ranges = new Array(shadows.length).fill(0).map((_, index) => index);

  return (
    <DemoCard>
      {ranges.map((index) => (
        <Box key={`${index}`} elevation={index}>
          {index === 0 ? '0dp+边框' : `${index}dp`}
        </Box>
      ))}
    </DemoCard>
  );
}
