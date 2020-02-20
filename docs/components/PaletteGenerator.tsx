import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { parseToHsl, toColorString } from 'polished';

function lighten(num: number, colorStr: string) {
  const color = parseToHsl(colorStr);

  color.lightness += (1 - color.lightness) * num;
  return toColorString(color);
}

function darken(num: number, colorStr: string) {
  const color = parseToHsl(colorStr);
  color.lightness *= 1 - num;
  return toColorString(color);
}

const ColorItem = styled.div`
  display: inline-block;
  width: 80px;
  height: 80px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const genPalette = (color: string) => {
  return [
    ['50', lighten(0.84, color)],
    ['100', lighten(0.62, color)],
    ['200', lighten(0.42, color)],
    ['300', lighten(0.26, color)],
    ['400', lighten(0.12, color)],
    ['500', color],
    ['600', darken(0.14, color)],
    ['700', darken(0.24, color)],
    ['800', darken(0.3, color)],
    ['900', darken(0.45, color)],
  ];
};

export default function PaletteGenerator() {
  const theme = useContext(ThemeContext);
  const primaryColor = theme.palette.primary.main;
  const colors = genPalette(primaryColor);

  return (
    <Wrapper>
      {colors.map(([name, color]) => (
        <ColorItem
          key={name}
          style={{
            background: color,
            color: theme.palette.getContrastText(color),
          }}
        >
          {name}
        </ColorItem>
      ))}
    </Wrapper>
  );
}
