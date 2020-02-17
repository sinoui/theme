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
