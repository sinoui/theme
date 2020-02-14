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

/**
 * 调色板设置
 */
export interface PaletteOptions {
  /**
   * 主色调
   */
  primary?: ColorSeries;
  /**
   * 辅助色调
   */
  accent?: ColorSeries;
  /**
   * 错误状态色调
   */
  error?: ColorSeries;
  /**
   * 成功状态色调
   */
  success?: ColorSeries;
  /**
   * 提示色调
   */
  info?: ColorSeries;
  /**
   * 警告状态色调
   */
  warning?: ColorSeries;
  /**
   * 危险状态色调
   */
  danger?: ColorSeries;
  /**
   * 主题类型
   */
  type?: 'light' | 'dark';
  /**
   * 对比度， 0 ~ 21
   */
  contrastThreshold?: number;
}

/**
 * 文本调色板
 */
export interface PaletteText {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
  icon: string;
  divider: string;
  lightDivider: string;
  snackbar: string;
}

/**
 * 输入框调色板
 */
export interface PaletteInput {
  bottomLine: string;
  helperText: string;
  labelText: string;
  inputText: string;
  disabled: string;
}

/**
 * 动作调色板
 */
export interface PaletteAction {
  active: string;
  disabled: string;
  hover: string;
  selected: string;
}

/**
 * 背景调色板
 */
export interface PaletteBackground {
  default: string;
  paper: string;
  appBar: string;
  contentFrame: string;
  divider: string;
  chips: string;
  chipsImg: string;
  chipsBut: string;
  chipsButHover: string;
  tooltip: string;
  transparent: string;
  sendcondaryTransparent: string;
  snackbar: string;
}

/**
 * 主题调色板
 */
export interface PaletteShade {
  text: PaletteText;
  input: PaletteInput;
  action: PaletteAction;
  background: PaletteBackground;
}

/**
 * 主题调色板
 */
export interface PaletteShades {
  /**
   * 在亮模式下的颜色设置
   */
  light: PaletteShade;
  /**
   * 在暗模式下的颜色设置
   */
  dark: PaletteShade;
}

/**
 * 调色板
 */
export interface Palette {
  /**
   * 主题类型
   */
  type: 'light' | 'dark';
  /**
   * 在不同模式下的颜色设置
   */
  shades: PaletteShades;
  /**
   * 文本颜色
   */
  text: PaletteText;
  input: PaletteInput;
  action: PaletteAction;
  background: PaletteBackground;
  primary: ColorSeries;
  accent: ColorSeries;
  error: ColorSeries;
  success: ColorSeries;
  info: ColorSeries;
  warning: ColorSeries;
  danger: ColorSeries;
  grey: ColorSeries;
  white: string;
  black: string;
  getContrastText: (color: string) => string;
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

/**
 * 颜色属性。可以是：
 *
 * * 主题色名称；primary, accent, success, info, error, warning, danger, light, dark, action, contrast, none
 * * 也可以是css color属性值，如currentColor, initial, inherit, unset, #aaa, rgba(0, 0, 0, 0.87), red
 */
export type ColorProp =
  | 'primary'
  | 'accent'
  | 'success'
  | 'error'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark'
  | 'action'
  | 'contrast'
  | 'initial'
  | 'inherit'
  | 'unset'
  | 'currentColor'
  | 'none'
  | string;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
