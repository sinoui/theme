import { TransitionOptions } from './types';

/**
 * 缓动
 */
export const easing = {
  /**
   * 标准缓动。用得最多的缓动。
   */
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  /**
   * 加速缓动。元素离开屏幕时使用。
   */
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  // Objects leave the screen at full velocity.
  /**
   * 减速缓动。元素进场时使用。
   */
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  /**
   * 更快速的缓入缓出。比校准缓动感觉跟快速一些。用于随时可能出现在页面上的元素的动画。
   */
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
};

/**
 * 持续时间
 */
export const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  /**
   * 标准持续时间
   */
  standard: 300,
  /**
   * 复杂动画的持续时间
   */
  complex: 500,
  /**
   * 进入屏幕的持续时间
   */
  enteringScreen: 225,
  /**
   * 离开屏幕的持续时间
   */
  leavingScreen: 195,
};

export const formatMs = (miliseconds: number) => `${Math.round(miliseconds)}ms`;

/**
 * 创建css3变换表达式
 *
 * @param props css3变换属性，可以是1个或者多个
 * @param options css3变换配置
 */
function createTransition(
  props: string | string[] = ['all'],
  options: TransitionOptions = {},
): string {
  const {
    duration: durationOption = duration.standard,
    easing: easingOption = easing.easeInOut,
    delay = 0,
  } = options;

  return (Array.isArray(props) ? props : [props])
    .map(
      (animatedProp) =>
        `${animatedProp} ${formatMs(durationOption)} ${easingOption} ${formatMs(
          delay,
        )}`,
    )
    .join(',');
}

/**
 * 根据高度获取动画时长
 *
 * @param height 高度
 */
function getAutoHeightDuration(height?: number | null): number {
  if (!height) {
    return 0;
  }

  const constant = height / 36;

  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

const transitions = {
  easing,
  duration,
  create: createTransition,
  getAutoHeightDuration,
};

export default transitions;
