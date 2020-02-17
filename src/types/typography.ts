/**
 * 字重
 */
export type FontWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

/**
 * 字体配置项
 */
export type TypographyOptions = Partial<ThemeTypography>;

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
