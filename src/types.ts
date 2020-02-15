/* eslint-disable @typescript-eslint/no-empty-interface */

/**
 * 色系
 */
export interface ColorSeries {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}
/* --------- 调色板 ------- */

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

/* ---------------typography----------------*/

/**
 * 字重
 */
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * 字体配置项
 */
export type TypographyConstants = Partial<ThemeTypography>;

/**
 * 文本主题
 */
export interface ThemeTypography {
  /**
   * 字体家族
   */
  fontFamily: string;
  /**
   * 极细字重
   */
  fontWeightLight: FontWeight;
  /**
   * 正常字重
   */
  fontWeightRegular: FontWeight;
  /**
   * 中等字重
   */
  fontWeightMedium: FontWeight;
  /**
   * 粗体字重
   */
  fontWeightBold: FontWeight;
  /**
   * 控制字体大小的参考值。默认为 `14px`。
   */
  fontSize: number;
  /**
   * `<html>`标签的字体大小，即浏览器默认字体大小。默认为 `16px`。
   */
  htmlFontSize: number;
  /**
   * 一级标题样式
   */
  h1: React.CSSProperties;
  /**
   * 二级标题样式
   */
  h2: React.CSSProperties;
  /**
   * 三级标题样式
   */
  h3: React.CSSProperties;
  /**
   * 四级标题样式
   */
  h4: React.CSSProperties;
  /**
   * 五级标题样式
   */
  h5: React.CSSProperties;
  /**
   * 六级标题样式
   */
  h6: React.CSSProperties;
  /**
   * 副标题1样式
   */
  subtitle1: React.CSSProperties;
  /**
   * 副标题2样式
   */
  subtitle2: React.CSSProperties;
  /**
   * 主体文本1样式
   */
  body1: React.CSSProperties;
  /**
   * 主体文本2样式
   */
  body2: React.CSSProperties;
  /**
   * 按钮文本样式
   */
  button: React.CSSProperties;
  /**
   * 说明文本样式
   */
  caption: React.CSSProperties;
  /**
   * overline 样式
   */
  overline: React.CSSProperties;

  /**
   * 将 px 值转换为 rem 值
   */
  pxToRem: (px: number) => string;
}

/**
 * 阴影主题
 */
export interface ThemeShadows {
  [index: number]: string;
}

/**
 * 变换配置项
 */
export interface TransitionOptions {
  duration?: number;
  easing?: string;
  delay?: number;
}

/**
 * 缓动函数
 */
export interface ThemeTransitionsEasing {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
}

/**
 * css3变换时长
 */
export interface ThemeTransitionsDuration {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
}

/**
 * css3变换主题
 */
export interface ThemeTransitions {
  easing: ThemeTransitionsEasing;
  duration: ThemeTransitionsDuration;
  create: (props: string | string[], options?: TransitionOptions) => string;
  getAutoHeightDuration: (height: number) => number;
}

/**
 * zIndex主题
 */
export interface ThemeZIndex {
  mobileStepper: number;
  menu: number;
  appBar: number;
  drawerOverlay: number;
  navDrawer: number;
  modal: number;
  dialogOverlay: number;
  dialog: number;
  layer: number;
  popover: number;
  snackbar: number;
  tooltip: number;
}

/**
 * 留白主题
 */
export interface ThemeSpacing {
  unit: number;
}

/**
 * 主题配置项
 */
export interface ThemeOptions {
  palette?: Palette;
  typography?: TypographyConstants;
  shadows?: ThemeShadows;
}

interface Breakpoints {
  /**
   * 超小尺寸断点。手机。
   */
  xs: number;
  /**
   * 小尺寸断点。平板。
   */
  sm: number;
  /**
   * 中等尺寸断点。笔记本电脑。
   */
  md: number;
  /**
   * 大尺寸断点。台式机电脑屏幕。
   */
  lg: number;
  /**
   * 超大尺寸断点。
   */
  xl: number;
  [other: string]: number;
}

/**
 * 主题
 */
export interface Theme {
  /**
   * 调色板
   */
  palette: Palette;
  /**
   * 字体
   */
  typography: ThemeTypography;
  /**
   * 阴影
   */
  shadows: ThemeShadows;
  /**
   * 过度动画
   */
  transitions: ThemeTransitions;
  /**
   * 层叠
   */
  zIndex: ThemeZIndex;
  /**
   * 间距
   */
  spacing: ThemeSpacing;
  /**
   * 断点
   */
  breakpoints: Breakpoints;
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
