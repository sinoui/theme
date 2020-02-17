import { PaletteOptions } from './palette';
import { TypographyOptions } from './typography';
import { DeepPartial } from './DeepPartial';
import { Theme } from './Theme';

/**
 * 主题配置
 */
export interface ThemeOptions
  extends Omit<DeepPartial<Theme>, 'palette' | 'typography'> {
  /**
   * 调色板
   */
  palette?: PaletteOptions;
  /**
   * 文字排版
   */
  typography?: TypographyOptions;
}
