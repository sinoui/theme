import { getLuminance } from 'polished';

/**
 * 获取两个颜色之间的对比度。
 *
 * 公式: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground
 *              - 前景色颜色值，比如: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background
 *              - 背景色颜色值，比如: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} 0 - 21之间的对比度。
 */
export default function getContrastRatio(
  foreground: string,
  background: string,
) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
