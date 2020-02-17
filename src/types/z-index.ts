/**
 * 主题中的 z-index 设置
 */
export interface ThemeZIndex {
  /**
   * 应用程序懒
   */
  appBar: number;
  /**
   * 抽屉
   */
  drawer: number;
  /**
   * 模态框
   */
  modal: number;
  /**
   * 对话框
   */
  dialog: number;
  /**
   * 弹出框
   */
  popover: number;
  /**
   * 信息提示框
   */
  snackbar: number;
  /**
   * 提示信息
   */
  tooltip: number;
}
