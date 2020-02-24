import deepmerge from 'deepmerge';
import createPalette from './createPalette';
import createTypography from './createTypography';
import shadows from './shadows';
import transitions from './transitions';
import zIndex from './zIndex';
import spacing from './spacing';
import { ThemeOptions, Theme } from './types';
import breakpoints from './breakpoints';

/**
 * 创建主题
 *
 * @param options 主题配置
 */
export default function createTheme(options: ThemeOptions = {}): Theme {
  const palette = createPalette(options.palette);
  const typography = createTypography(options.typography);

  return deepmerge(
    { shadows, transitions, zIndex, spacing, breakpoints },
    { ...options, palette, typography },
  ) as Theme;
}
