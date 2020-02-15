import { getContrast, darken, lighten } from 'polished';
import deepmerge from 'deepmerge';
import {
  ColorSeries,
  PaletteColorOption,
  ShadeKey,
  PaletteOptions,
  Palette,
} from './types';
import indigo from './colors/indigo';
import pink from './colors/pink';
import red from './colors/red';
import orange from './colors/orange';
import blue from './colors/blue';
import green from './colors/green';
import grey from './colors/grey';
import common from './colors/common';

function isColorSeries(
  colorItemOption: PaletteColorOption,
): colorItemOption is ColorSeries {
  return (
    !(colorItemOption as any).main &&
    [300, 500, 700].every((key) => !!(colorItemOption as any)[key])
  );
}

/**
 * 获取符合对比度的文本颜色
 *
 * @param color 背景颜色
 * @param contrastRatio 标准对比度
 * @param textOnDarkColor 文本在深色背景上的颜色
 * @param textOnLightDark 文本在浅色背景上的颜色
 */
export function getContrastText(
  color: string,
  contrastRatio: number,
  textOnDarkColor: string,
  textOnLightDark: string,
) {
  const contrast = getContrast(color, textOnDarkColor);
  if (contrast >= contrastRatio) {
    return textOnDarkColor;
  }
  return textOnLightDark;
}

/**
 * 解析调色板颜色
 *
 * @param PaletteColorOption 调色板项配置
 * @param getContrastTextFn 获取符合对比度标准的文本颜色函数
 */
export function parsePaletteColor(
  option: PaletteColorOption,
  getContrastTextFn: (color: string) => string,
  mainShade: ShadeKey | undefined = 500,
  lightShade: ShadeKey | undefined = 300,
  darkShade: ShadeKey | undefined = 700,
) {
  if (isColorSeries(option)) {
    return {
      main: option[mainShade],
      dark: option[darkShade],
      light: option[lightShade],
      contrastText: getContrastTextFn(option[mainShade]),
    };
  }

  return {
    main: option.main,
    dark: option.dark ?? darken(0.18)(option.main),
    light: option.light ?? lighten(0.13)(option.main),
    contrastText: getContrastTextFn(option.main),
  };
}

export const light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.6)',
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    disabled: 'rgba(0, 0, 0, 0.26)',
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
  background: {
    default: grey[50],
    paper: common.white,
  },
  divider: 'rgba(0, 0, 0, 0.12)',
};

export const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
  },
  background: {
    default: '#303030',
    paper: grey[800],
  },
  divider: 'rgba(255, 255, 255, 0.12)',
};

const defaultPalette = {
  primary: indigo,
  secondary: pink,
  error: red,
  warning: orange,
  info: blue,
  success: green,
};

/**
 * 创建调色板
 *
 * @param options 调色板配置
 */
export default function createPalette(options: PaletteOptions = {}): Palette {
  const getContrastTextFn = (color: string) => {
    return getContrastText(color, 3, dark.text.primary, light.text.primary);
  };
  const getColorByKey = (
    key: 'primary' | 'error' | 'info' | 'warning' | 'success',
  ) =>
    parsePaletteColor(options[key] ?? defaultPalette[key], getContrastTextFn);

  const useDefaultPrimary = !options.primary;
  const primary = getColorByKey('primary');
  const secondary = parsePaletteColor(
    options.secondary ??
      (useDefaultPrimary ? defaultPalette.secondary : primary),
    getContrastTextFn,
    'A400',
    'A200',
    'A700',
  );

  const {
    primary: primaryOption,
    secondary: secondaryOption,
    type = 'light',
    error,
    warning,
    info,
    success,
    ...other
  } = options;

  const typeObject = type === 'light' ? light : dark;

  return deepmerge(
    {
      type,
      getContrastText: getContrastTextFn,
      primary,
      secondary,
      error: getColorByKey('error'),
      warning: getColorByKey('warning'),
      info: getColorByKey('info'),
      success: getColorByKey('success'),
      grey,
      common,
      ...typeObject,
    },
    other,
  );
}
