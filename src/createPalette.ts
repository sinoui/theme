import { getContrast, darken, lighten } from 'polished';
import { ColorSeries } from './types';
import { indigo } from './colors';

interface PaletteItem {
  /**
   * 主颜色
   */
  main: string;
  /**
   * 深色
   */
  darken: string;
  /**
   * 浅色
   */
  lighten: string;
  /**
   * 对比文本的颜色
   */
  contrastText: string;
}

interface Palette {
  /**
   * 品牌色，主颜色。
   */
  primary: PaletteItem;
  /**
   * 获取在指定背景颜色上的符合对比度标准的文本颜色（即 Material Design 中的 `on color`）
   */
  getContrastText: (color: string) => string;
}

type PaletteItemOption =
  | ColorSeries
  | {
      /**
       * 主颜色
       */
      main: string;
      /**
       * 深色
       */
      darken?: string;
      /**
       * 浅色
       */
      lighten?: string;
      /**
       * 对比文本的颜色
       */
      contrastText?: string;
    };

interface PaletteOptions {
  primary?: PaletteItemOption;
}

function isColorSeries(
  colorItemOption: PaletteItemOption,
): colorItemOption is ColorSeries {
  return !!(
    (colorItemOption as ColorSeries)[500] &&
    (colorItemOption as ColorSeries)[300] &&
    (colorItemOption as ColorSeries)[700]
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
 * 解析调色板项
 *
 * @param paletteItemOption 调色板项配置
 * @param getContrastTextFn 获取符合对比度标准的文本颜色函数
 */
export function parsePaletteItem(
  paletteItemOption: PaletteItemOption,
  getContrastTextFn: (color: string) => string,
) {
  if (isColorSeries(paletteItemOption)) {
    return {
      main: paletteItemOption[500],
      darken: paletteItemOption[700],
      lighten: paletteItemOption[300],
      contrastText: getContrastTextFn(paletteItemOption[700]),
    };
  }
  return {
    main: paletteItemOption.main,
    darken: paletteItemOption.darken ?? darken(0.18)(paletteItemOption.main),
    lighten: paletteItemOption.lighten ?? lighten(0.13)(paletteItemOption.main),
    contrastText: getContrastTextFn(paletteItemOption.main),
  };
}

/**
 * 创建调色板
 *
 * @param options 调色板配置
 */
export default function createPalette(options: PaletteOptions = {}): Palette {
  const getContrastTextFn = (color: string) => {
    return getContrastText(color, 3, '#fff', 'rgba(0, 0, 0, 0.87)');
  };

  return {
    getContrastText: getContrastTextFn,
    primary: parsePaletteItem(options.primary ?? indigo, getContrastTextFn),
  };
}
