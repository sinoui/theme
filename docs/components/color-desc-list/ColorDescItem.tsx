import React from 'react';
import styled, { css } from 'styled-components';

const H6 = styled.h6`
  font-size: 14px;
  line-height: 1.1em;
  margin: 6px 0;
  font-weight: 400;
`;

const borderColors = {
  '#303030': 'rgba(255, 255, 255, 0.12)',
  '#fafafa': 'rgba(0, 0, 0, 0.12)',
};

const borderCss = css(({ color }: { color: string }) => {
  const borderColor = borderColors[color];
  const border = borderColor ? `1px solid ${borderColor}` : '';
  return border ? { border } : null;
});

const ColorPiece = styled.div<{ color: string }>`
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  ${borderCss};
`;

/**
 * 介绍颜色的项目
 */
export default function ColorDescItem({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return (
    <div style={{ display: 'flex', margin: '8px 0' }}>
      <ColorPiece color={color} />
      <div
        style={{
          marginLeft: 8,
        }}
      >
        <H6>{name}</H6>
        <span style={{ fontSize: 13 }}>{color}</span>
      </div>
    </div>
  );
}
