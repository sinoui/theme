import deepMerge from 'deepmerge';
import { TypographyConstants, ThemeTypography, FontWeight } from './types';

const DEFAULT_FONT_FAMILY = `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB',
'Microsoft YaHei', Roboto, 'Noto Sans SC', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
'Segoe UI Emoji', 'Segoe UI Symbol'`;

const allCapsStyle: React.CSSProperties = {
  textTransform: 'uppercase',
};

const getStandardTypography = (
  fontWeightLight: FontWeight,
  fontWeightRegular: FontWeight,
  fontWeightMedium: FontWeight,
  pxToRem: (size: number) => string,
) => {
  const buildStyle = (
    fontWeight: FontWeight,
    size: number,
    lineHeight: number,
    letterSpacing: number,
    style?: React.CSSProperties,
  ): React.CSSProperties => ({
    fontWeight,
    fontSize: pxToRem(size),
    lineHeight,
    letterSpacing: `${Math.round((letterSpacing / size) * 1e5) / 1e5}em`,
    ...style,
  });

  const standard = {
    h1: buildStyle(fontWeightLight, 96, 1.167, -1.5),
    h2: buildStyle(fontWeightLight, 60, 1.2, -0.5),
    h3: buildStyle(fontWeightRegular, 48, 1.167, 0),
    h4: buildStyle(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildStyle(fontWeightRegular, 24, 1.334, 0),
    h6: buildStyle(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildStyle(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildStyle(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildStyle(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildStyle(fontWeightRegular, 14, 1.43, 0.15),
    button: buildStyle(fontWeightMedium, 15, 1.75, 0.4, allCapsStyle),
    caption: buildStyle(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildStyle(fontWeightRegular, 12, 2.66, 1, allCapsStyle),
  };

  return standard;
};

/**
 * 创建文本排版
 *
 * @param constants 文本排版配置
 */
export default function createTypography(
  constants: TypographyConstants = {},
): ThemeTypography {
  const {
    fontFamily = DEFAULT_FONT_FAMILY,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    fontSize = 14,
    htmlFontSize = 16,
    pxToRem = (size: number) => `${((size / 14) * fontSize) / htmlFontSize}rem`,
  } = constants;

  const theme = getStandardTypography(
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    pxToRem,
  );

  return deepMerge(
    {
      ...theme,
      fontFamily,
      fontWeightRegular,
      fontWeightLight,
      fontWeightMedium,
      fontWeightBold,
      fontSize,
      htmlFontSize,
      pxToRem,
    },
    constants,
  );
}
