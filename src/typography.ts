import {
  Palette,
  TypographyConstants,
  ThemeTypography,
  FontWeight,
} from './types';

const DEFAULT_FONT_FAMILY = `"Helvetica Neue",Helvetica, Arial, sans-serif,
"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;

/**
 * 获取
 */
function getLetterSpacing(tracking: number, fontSize: number): string {
  return `${tracking / (fontSize * 16)}em`;
}

const getDefaultTypography = (
  fontWeightLight: FontWeight,
  fontWeightRegular: FontWeight,
  fontWeightMedium: FontWeight,
  fontFamily: string,
  palette: Palette,
): ThemeTypography => ({
  fontWeightLight,
  fontWeightRegular,
  fontWeightMedium,
  fontFamily,
  display4: {
    fontSize: 7,
    fontWeight: fontWeightLight,
    fontFamily,
    lineHeight: 7.25,
    color: palette.text.primary,
    letterSpacing: getLetterSpacing(-1.5, 6),
  },
  display3: {
    fontSize: 3.5,
    fontWeight: fontWeightRegular,
    fontFamily,
    lineHeight: 4.125,
    color: palette.text.primary,
    letterSpacing: getLetterSpacing(-0.5, 3.75),
  },
  display2: {
    fontSize: 2.8125,
    fontWeight: fontWeightRegular,
    fontFamily,
    lineHeight: 3.25,
    color: palette.text.primary,
    letterSpacing: 'normal',
  },
  display1: {
    fontSize: 2.125,
    fontWeight: fontWeightRegular,
    fontFamily,
    lineHeight: 2.5,
    color: palette.text.primary,
    letterSpacing: getLetterSpacing(0.25, 2.125),
  },
  headline: {
    fontSize: 1.5,
    fontWeight: fontWeightRegular,
    fontFamily,
    lineHeight: 2,
    color: palette.text.primary,
    letterSpacing: 'normal',
  },
  title: {
    fontSize: 1.25,
    fontWeight: fontWeightMedium,
    fontFamily,
    lineHeight: 1.75,
    color: palette.text.primary,
  },
  subheading: {
    fontSize: 1,
    fontWeight: fontWeightRegular,
    fontFamily,
    lineHeight: 1.5,
    color: palette.text.primary,
  },
  body2: {
    fontSize: 0.875,
    fontWeight: fontWeightMedium,
    fontFamily,
    lineHeight: 1.5,
    color: palette.text.primary,
  },
  body1: {
    fontSize: 0.875,
    fontWeight: fontWeightRegular,
    fontFamily,
    lineHeight: 1.5,
    color: palette.text.primary,
    letterSpacing: getLetterSpacing(0.25, 0.875),
  },
  caption: {
    fontSize: 0.75,
    fontWeight: fontWeightRegular,
    fontFamily,
    lineHeight: 0.875,
    color: palette.text.secondary,
  },
  button: {
    fontSize: 0.875,
    fontWeight: fontWeightMedium,
    fontFamily,
    lineHeight: 'normal',
    color: palette.text.primary,
  },
});

/**
 * 创建文本主题
 *
 * @param palette 调色板
 * @param constants 文本主题配置
 */
export default function createTypography(
  palette: Palette,
  constants: TypographyConstants = {},
): ThemeTypography {
  const {
    fontFamily = DEFAULT_FONT_FAMILY,
    fontWeightLight = '300',
    fontWeightRegular = '400',
    fontWeightMedium = '500',
  } = constants;

  const theme: ThemeTypography = getDefaultTypography(
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontFamily,
    palette,
  );

  (Object.keys(theme) as ((keyof ThemeTypography)[])).forEach((key) => {
    const value = constants[key];
    if (value) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      theme[key] = value as any;
    }
  });

  return theme;
}
