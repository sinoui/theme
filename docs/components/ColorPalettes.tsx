import React from 'react';
import styled from 'styled-components';
import getConstrastRatio from '../../src/getContrastRatio';
import * as colors from '../../src/colors';
import { ColorSeries } from '../../src/types';

const DarkTextColor = 'rgba(0, 0, 0, 0.87)';
const LightTextColor = 'rgba(255, 255, 255, 0.87)';

const colorNameMap = {
  red: '红色',
  pink: '粉红色',
  purple: '紫色',
  deepPurple: '深紫色',
  indigo: '靛青色',
  blue: '蓝色',
  lightBlue: '浅蓝色',
  cyan: '青色',
  teal: '蓝绿色',
  green: '绿色',
  lightGreen: '浅绿色',
  lime: '柠檬色',
  yellow: '黄色',
  amber: '琥珀色',
  orange: '橙色',
  deepOrange: '深橙色',
  brown: '棕色',
  grey: '灰色',
  blueGrey: '蓝灰色',
};

const variants = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
  'A100',
  'A200',
  'A400',
  'A700',
];

const ColorTagHeadWrapper = styled.div`
  padding: 10px 15px 11px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

const toWords = (title: string) =>
  title
    .replace(/[A-Z]/g, (text) => ` ${text.toLowerCase()}`)
    .replace(/^[a-z]/, (text) => text.toUpperCase());

/**
 * 颜色标签头
 */
function ColorTagHead({
  title,
  color,
  light,
  shade,
}: {
  title: string;
  color: string;
  light: boolean;
  shade: string;
}) {
  return (
    <ColorTagHeadWrapper
      style={{
        color: light ? LightTextColor : DarkTextColor,
        backgroundColor: color,
      }}
    >
      <div
        style={{
          marginBottom: 32,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <span>{toWords(title)}</span>
        <span>{colorNameMap[title]}</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>{shade}</span>
        <span>{color.toUpperCase()}</span>
      </div>
    </ColorTagHeadWrapper>
  );
}

const ColorTagWrapper = styled(ColorTagHeadWrapper)`
  & + & {
    margin-top: -1px;
  }

  display: flex;
  justify-content: space-between;
`;

/**
 * 颜色标签
 */
function ColorTag({
  title,
  color,
  light,
}: {
  title: string;
  color: string;
  light: boolean;
}) {
  return (
    <ColorTagWrapper
      style={{
        backgroundColor: color,
        color: light ? LightTextColor : DarkTextColor,
      }}
    >
      <span>{title}</span>
      <span>{color.toUpperCase()}</span>
    </ColorTagWrapper>
  );
}

const Sep = styled.div`
  height: 4px;
`;

const ColorModuleWrapper = styled.div`
  padding: 8px 20px;
  flex: 0 1 100%;
  box-sizing: border-box;

  @media screen and (max-width: 920px) and (min-width: 521px) {
    flex-basis: 100%;
  }

  @media screen and (min-width: 521px) {
    flex-basis: 33.33%;
    max-width: 33.33%;
  }
`;

/**
 * 颜色模块
 */
function ColorModule({ color, name }: { color: ColorSeries; name: string }) {
  const filteredVariants = variants
    .map((item) => ({ name: item, color: color[item] }))
    .filter((item) => !!item.color);
  return (
    <ColorModuleWrapper>
      <ColorTagHead
        shade="500"
        color={color[500]}
        title={name}
        light={getConstrastRatio(LightTextColor, color[500]) >= 3}
      />
      <Sep />
      {filteredVariants
        .filter((item) => typeof item.name === 'number')
        .map((item) => (
          <ColorTag
            color={item.color}
            key={item.name}
            title={`${item.name}`}
            light={getConstrastRatio(LightTextColor, item.color) >= 3}
          />
        ))}
      <Sep />
      {filteredVariants
        .filter((item) => typeof item.name !== 'number')
        .map((item) => (
          <ColorTag
            color={item.color}
            key={item.name}
            title={`${item.name}`}
            light={getConstrastRatio(LightTextColor, item.color) >= 3}
          />
        ))}
    </ColorModuleWrapper>
  );
}

const ColorPalettesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

/**
 * 颜色调色板
 */
export default function ColorPalettes() {
  return (
    <ColorPalettesWrapper>
      {Object.keys(colors)
        .filter(
          (item) => !!(colors[item] as any)[50] && !item.startsWith('color'),
        )
        .map((item) => ({ name: item, color: colors[item] }))
        .map((item) => (
          <ColorModule key={item.name} name={item.name} color={item.color} />
        ))}
      <ColorModuleWrapper>
        <ColorTag title="Black" color={colors.common.black} light />
        <ColorTag title="White" color={colors.common.white} light={false} />
      </ColorModuleWrapper>
    </ColorPalettesWrapper>
  );
}
