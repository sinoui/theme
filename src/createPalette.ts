import { getContrast, darken, lighten } from 'polished';
import deepmerge from 'deepmerge';
import { ColorSeries } from './types';
import indigo from './colors/indigo';
import pink from './colors/pink';
import red from './colors/red';
import orange from './colors/orange';
import blue from './colors/blue';
import green from './colors/green';
import grey from './colors/grey';
import common from './colors/common';

type ShadeKey = keyof ColorSeries;

/**
 * 调色板颜色
 */
export interface PaletteColor {
  /**
   * 主颜色
   */
  main: string;
  /**
   * 深色
   */
  dark: string;
  /**
   * 浅色
   */
  light: string;
  /**
   * 对比文本的颜色
   */
  contrastText: string;
}

/**
 * 文本颜色
 */
interface TypeText {
  /**
   * 重要文本的颜色
   */
  primary: string;
  /**
   * 次要文本的颜色，如
   */
  secondary: string;
  /**
   * 不可用文本颜色。
   */
  disabled: string;
  /**
   * hint 模式下的文本颜色。
   */
  hint: string;
}

/**
 * 按钮颜色
 */
interface TypeAction {
  /**
   * 可用按钮的文本颜色
   */
  active: string;
  /**
   * 鼠标移动到按钮上时的背景色
   */
  hover: string;
  /**
   * hover状态下的透明度
   */
  hoverOpacity: number;
  /**
   * 按钮被选中时的背景色
   */
  selected: string;
  /**
   * 选中状态下的透明度
   */
  selectedOpacity: number;
  /**
   * 按钮不可用时的文本颜色
   */
  disabled: string;
  /**
   * 按钮不用时的背景色
   */
  disabledBackground: string;
}

/**
 * 背景颜色
 */
interface TypeBackground {
  /**
   * 默认背景颜色
   */
  default: string;
  /**
   * 纸张背景颜色
   */
  paper: string;
}

/**
 * 类型颜色
 */
interface TypeObject {
  /**
   * 文本颜色
   */
  text: TypeText;
  /**
   * 按钮颜色
   */
  action: TypeAction;
  /**
   * 背景颜色
   */
  background: TypeBackground;
  /**
   * 分割线颜色
   */
  divider: string;
}

type PaletteType = 'light' | 'dark';

interface Palette extends TypeObject {
  type: PaletteType;
  /**
   * 品牌色，主颜色。
   */
  primary: PaletteColor;
  /**
   * 辅助色。
   */
  secondary: PaletteColor;
  /**
   * 错误状态颜色。
   */
  error: PaletteColor;
  /**
   * 警告状态颜色。
   */
  warning: PaletteColor;
  /**
   * 普通信息颜色。
   */
  info: PaletteColor;
  /**
   * 成功状态颜色。
   */
  success: PaletteColor;
  /**
   * 灰色色系
   */
  grey: ColorSeries;
  /**
   * 获取在指定背景颜色上的符合对比度标准的文本颜色（即 Material Design 中的 `on color`）
   *
   * @param color 背景颜色
   */
  getContrastText(color: string): string;
  /**
   * 通用颜色
   */
  common: { white: string; black: string };
}

type PaletteColorOption =
  | ColorSeries
  | {
      /**
       * 主颜色
       */
      main: string;
      /**
       * 深色
       */
      dark?: string;
      /**
       * 浅色
       */
      light?: string;
      /**
       * 对比文本的颜色
       */
      contrastText?: string;
    };

interface PaletteOptions {
  /**
   * 主颜色
   */
  primary?: PaletteColorOption;
  /**
   * 辅助色。默认为主题色。
   */
  secondary?: PaletteColorOption;
  /**
   * 错误状态颜色。
   */
  error?: PaletteColorOption;
  /**
   * 警告状态颜色。
   */
  warning?: PaletteColorOption;
  /**
   * 普通信息颜色。
   */
  info?: PaletteColorOption;
  /**
   * 成功状态颜色。
   */
  success?: PaletteColorOption;
  /**
   * 灰色色系
   */
  grey?: Partial<ColorSeries>;
  /**
   * 颜色模式。
   */
  type?: PaletteType;
  /**
   * 设置文本颜色。
   */
  text?: Partial<TypeText>;
  /**
   * 设置按钮颜色。
   */
  action?: Partial<TypeAction>;
  /**
   * 设置背景颜色。
   */
  background?: Partial<TypeBackground>;
  /**
   * 分割线颜色
   */
  divider?: string;
}

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
  PaletteColorOption: PaletteColorOption,
  getContrastTextFn: (color: string) => string,
  mainShade: ShadeKey | undefined = 500,
  lightShade: ShadeKey | undefined = 300,
  darkShade: ShadeKey | undefined = 700,
) {
  if (isColorSeries(PaletteColorOption)) {
    return {
      main: PaletteColorOption[mainShade],
      dark: PaletteColorOption[darkShade],
      light: PaletteColorOption[lightShade],
      contrastText: getContrastTextFn(PaletteColorOption[700]),
    };
  }
  return {
    main: PaletteColorOption.main,
    dark: PaletteColorOption.dark ?? darken(0.18)(PaletteColorOption.main),
    light: PaletteColorOption.light ?? lighten(0.13)(PaletteColorOption.main),
    contrastText: getContrastTextFn(PaletteColorOption.main),
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
