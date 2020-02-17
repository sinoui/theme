export interface Breakpoints {
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
