import { ColorSeries } from './ColorSeries';

export type ShadeKey = keyof ColorSeries;

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
export interface TypeText {
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
export interface TypeAction {
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
export interface TypeBackground {
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
export interface TypeObject {
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

export interface Palette extends TypeObject {
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

export type PaletteColorOption =
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

export interface PaletteOptions {
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
