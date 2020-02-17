/**
 * Material Design 中的[阴影](https://material.io/design/environment/light-shadows.html#shadows)是由主光源( key light )和环境光 ( ambient light ) 投射到不透明表面后形成的。在 web 中，通过 box-shadow 来实现阴影效果。
 *
 * 主光源会投射出 [umbra、penumbra](https://en.wikipedia.org/wiki/Umbra,_penumbra_and_antumbra) 两种类型的阴影。
 *
 * 阴影的主要作用是表示组件的海拔。
 *
 * 这里的实现参考了一些UI库：
 *
 * * [material-components-web/elevation](https://github.com/material-components/material-components-web/blob/master/packages/mdc-elevation/_variables.scss)
 * * [@material-ui/core/styles/shadows](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/styles/shadows.js)
 */

/**
 * 阴影尺寸
 *
 * 四个值分别是：
 *
 * * h-shadow, 水平阴影的位置。允许负值。
 * * v-shadow, 垂直阴影的位置。允许负值。
 * * blur, 模糊距离。
 * * spread, 阴影的大小。
 */
type BoxShadowSize = [number, number, number, number];

/**
 * umbra阴影的半透明度
 */
const umbraOpacity = 0.2;
/**
 * penumbra阴影的半透明度
 */
const penumbraOpacity = 0.14;
/**
 * 环境光阴影的半透明度
 */
const ambientOpacity = 0.12;

const joinPxValues = (pxValues: number[]) =>
  pxValues.map((px) => `${px}px`).join(' ');

/**
 * 创建阴影
 *
 * @param umbra umbra阴影尺寸
 * @param penumbr penumbr阴影尺寸
 * @param ambient 环境光阴影尺寸
 */
const createShadow = (
  umbra: BoxShadowSize,
  penumbr: BoxShadowSize,
  ambient: BoxShadowSize,
) =>
  [
    `${joinPxValues(umbra)} rgba(0,0,0,${umbraOpacity})`,
    `${joinPxValues(penumbr)} rgba(0,0,0,${penumbraOpacity})`,
    `${joinPxValues(ambient)} rgba(0,0,0,${ambientOpacity})`,
  ].join(',');

const shadows = [
  // 0
  'none',
  // 1
  createShadow([0, 2, 1, -1], [0, 1, 1, 0], [0, 1, 3, 0]),
  // 2
  createShadow([0, 1, 5, 0], [0, 2, 2, 0], [0, 3, 1, -2]),
  // 3
  createShadow([0, 1, 8, 0], [0, 3, 4, 0], [0, 3, 3, -2]),
  // 4
  createShadow([0, 2, 4, -1], [0, 4, 5, 0], [0, 1, 10, 0]),
  // 5
  createShadow([0, 3, 5, -1], [0, 5, 8, 0], [0, 1, 14, 0]),
  // 6
  createShadow([0, 3, 5, -1], [0, 6, 10, 0], [0, 1, 18, 0]),
  // 7
  createShadow([0, 4, 5, -2], [0, 7, 10, 1], [0, 2, 16, 1]),
  // 8
  createShadow([0, 5, 5, -3], [0, 8, 10, 1], [0, 3, 14, 2]),
  // 9
  createShadow([0, 5, 6, -3], [0, 9, 12, 1], [0, 3, 16, 2]),
  // 10
  createShadow([0, 6, 6, -3], [0, 10, 14, 1], [0, 4, 18, 3]),
  // 11
  createShadow([0, 6, 7, -4], [0, 11, 15, 1], [0, 4, 20, 3]),
  // 12
  createShadow([0, 7, 8, -4], [0, 12, 17, 2], [0, 5, 22, 4]),
  // 13
  createShadow([0, 7, 8, -4], [0, 13, 19, 2], [0, 5, 24, 4]),
  // 14
  createShadow([0, 7, 9, -4], [0, 14, 21, 2], [0, 5, 26, 4]),
  // 15
  createShadow([0, 8, 9, -5], [0, 15, 22, 2], [0, 6, 28, 5]),
  // 16
  createShadow([0, 8, 10, -5], [0, 16, 24, 2], [0, 6, 30, 5]),
  // 17
  createShadow([0, 8, 11, -5], [0, 17, 26, 2], [0, 6, 32, 5]),
  // 18
  createShadow([0, 9, 11, -5], [0, 18, 28, 2], [0, 7, 34, 6]),
  // 19
  createShadow([0, 9, 12, -6], [0, 19, 29, 2], [0, 7, 36, 6]),
  // 20
  createShadow([0, 10, 13, -6], [0, 20, 31, 3], [0, 8, 38, 7]),
  // 21
  createShadow([0, 10, 13, -6], [0, 21, 33, 3], [0, 8, 40, 7]),
  // 22
  createShadow([0, 10, 14, -6], [0, 22, 35, 3], [0, 8, 42, 7]),
  // 23
  createShadow([0, 11, 14, -7], [0, 23, 36, 3], [0, 9, 44, 8]),
  // 24
  createShadow([0, 11, 15, -7], [0, 24, 38, 3], [0, 9, 46, 8]),
];

export default shadows;
