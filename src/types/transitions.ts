/**
 * 变换配置项
 */
export interface TransitionOptions {
  /**
   * 持续时长。默认为 300 ms。
   */
  duration?: number;
  /**
   * 缓动。默认为 cubic-bezier(0.4, 0.0, 0.2, 1)。
   */
  easing?: string;
  /**
   * 延迟时长。默认为 0 ms。
   */
  delay?: number;
}

/**
 * 缓动函数
 */
export interface ThemeTransitionsEasing {
  /**
   * 标准缓动。用得最多的缓动。
   */
  easeInOut: string;
  /**
   * 加速缓动。元素离开屏幕时使用。
   */
  easeOut: string;
  /**
   * 减速缓动。元素进场时使用。
   */
  easeIn: string;
  /**
   * 更快速的缓入缓出。比校准缓动感觉跟快速一些。用于随时可能出现在页面上的元素的动画。
   */
  sharp: string;
}

/**
 * css3变换时长
 */
export interface ThemeTransitionsDuration {
  shortest: number;
  shorter: number;
  short: number;
  /**
   * 标准持续时间
   */
  standard: number;
  /**
   * 复杂动画的持续时间
   */
  complex: number;
  /**
   * 进入屏幕的持续时间
   */
  enteringScreen: number;
  /**
   * 离开屏幕的持续时间
   */
  leavingScreen: number;
}

/**
 * 动效过渡
 */
export interface ThemeTransitions {
  /**
   * 标准缓动
   */
  easing: ThemeTransitionsEasing;
  /**
   * 持续时间
   */
  duration: ThemeTransitionsDuration;
  /**
   * 创建过渡样式
   *
   * @param props 变化属性。如 `'transform'`, `['transform', 'color']`。默认为 'all'。
   * @param options 过渡配置项
   */
  create(props: string | string[], options?: TransitionOptions): string;
  /**
   * 根据高度自动计算持续时间
   *
   * @param height 高度
   */
  getAutoHeightDuration(height: number): number;
}
