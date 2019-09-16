import { TransitionOptions } from './types';

export const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  // Objects leave the screen at full velocity.
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  // The sharp curve is used  may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)',
};

export const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
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
function getAutoHeightDuration(height?: number): number {
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
