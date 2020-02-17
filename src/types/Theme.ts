import { Palette } from './palette';
import { ThemeTypography } from './typography';
import { ThemeShadows } from './shadows';
import { ThemeTransitions } from './transitions';
import { ThemeZIndex } from './z-index';
import { ThemeSpacing } from './spacing';
import { Breakpoints } from './breakpoints';

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
