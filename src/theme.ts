import createPalette from './palette';
import createTypography from './typography';
import shadows from './shadows';
import transitions from './transitions';
import zIndex from './zIndex';
import spacing from './spacing';
import { ThemeOptions, Theme } from './types';

/**
 * 创建主题
 * @param options 主题配置
 */
export default function createTheme(options: ThemeOptions = {}): Theme {
  const palette = options.palette || createPalette();
  const typography = options.typography || createTypography(palette);

  return {
    shadows,
    transitions,
    zIndex,
    spacing,
    ...options,
    palette,
    typography,
  };
}
