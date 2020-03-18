# 版本变更说明

## v1.0.0-beta.8 2020.3.18

- fix(typography): 修复 button 字体字号不正确的 bug

## v1.0.0-beta.7 2020.3.5

- fix(typography): 修复字体样式对象的类型声明不兼容 styled-components 的缺陷
- fix(shadows): 修复海拔为 2 和 3 的阴影样式不正确的错误

## v1.0.0-beta.5 2020.2.28

- fix: 修复 DefaultTheme 类型错误

## v1.0.0-beta.3 2020.2.25

- fix: 修复打包失败的缺陷

## v1.0.0-beta.1 2020.2.24

- feat(typography): 采用新的 Material Design 标准设置文字排版分类
- feat(typography): 简化自定义文字排版的方式
- feat(typography): `typography` 新增 `pxToRem` 函数，用来转换 px 到 rem
- feat(typography): 可以定制文字排版分类样式
- feat: 新增 ThemeStyle 组件，用来定义全局 css 样式
- chore(colors): 拆分 colors.ts 为一个颜色一个 ts 文件

### 破坏性变更

#### 创建主题的方式

之前的方式是：

```ts
import {
  createTheme,
  createPalette,
  createTypography,
  colors,
} from '@sinoui/theme';

const theme = createTheme({
  typography: createTypography({
    fontSize: 12,
  }),
  palette: createPalette({
    primary: colors.red,
  }),
});
```

为了简化创建主题，提供了新的方式是：

```ts
import { createTheme } from '@sinoui/theme';
import red from '@sinoui/theme/colors/red';

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
  palette: {
    primary: colors.red,
  },
});
```

虽然仍然支持旧的方式，但是不再推荐使用。

#### 文字排版

文字排版分类发生变化，之前的分类是：

- dispay4
- display3
- display2
- display1
- subheading
- title
- headline
- body2
- body1
- caption
- button

新的文字排版分类：

- h1
- h2
- h3
- h4
- h5
- h6
- subtitle1
- subtitle2
- body1
- body2
- caption
- button

#### 颜色模块 colors module

1. colors 模块剔除了非标准的颜色，包括：

   - transparent
   - fullBlack
   - darkBlack
   - lightBlack
   - minBlack
   - faintBlack
   - fullWhite
   - darkWhite
   - lightWhite

2. colors 模块将 white 和 black 迁移到 colors/common 中

   之前的方式：

   ```ts
   import { colors } from '@sinoui/theme';

   console.log(colors.white, colors.black);
   ```

   新的方式：

   ```ts
   import common from '@sinoui/theme/colors';

   console.log(common.white, common.black);
   ```

3. colors 模块去掉自定义颜色系列

   - colorBlack
   - colorDeepGray
   - colorBrown
   - colorGray
   - colorKelly
   - colorLigntYellow

4. colors 模块去掉颜色系列中的 `w1`, `w2`, `w3`

#### 调色板

调色板发生了重大变化，去掉了很多可以通过计算轻而易举得到的颜色值。新版本的调色板，推荐大家在日常开发中多使用[polished](https://polished.js.org/)来扩展颜色。

新的调色板使用方式：

- 调色板不为单独的组件定义颜色，组件内部颜色在组件内部定义或者生成
- 调色板提供了 `palette.grey`，组件可以使用此灰色集合来定义内部颜色
- 使用 [polished](https://polished.js.org/) 提供的方法扩展颜色

去掉的颜色值：

- 去掉了整个 `danger` 颜色分类，使用 `warnning` 代替
- 去掉了整个 `input`

  - helperText, labelText --> palette.text.secondary
  - disabled --> palette.text.disabled
  - inputText --> palette.text.primary
  - bottomLine --> 在组件中直接定义即可，没必要放在主题定制中

- 去掉部分 `text` 中的属性：

  - icon --> sinoui-components 未使用
  - divider --> palette.divider
  - lightDivider --> sinoui-components 未使用
  - snackbar --> palette.getContrastText(snackbar 组件的背景色)

- 去掉了大部分 `background` 中的属性，只保留 default 和 paper：

  - appBar --> palette.grey[100]
  - contentFrame --> palette.grey[200]
  - divider --> palette.divider（见后面的说明）
  - chips --> palette.grey[300]
  - chipsImg --> palette.grey[400]
  - chipsBut --> palette.grey[400]
  - chipsButHover --> palette.grey[500]
  - tooltip --> grey[600]
  - transparent --> 直接使用 `transparent` 关键字
  - sendcondaryTransparent --> palette.text.primary
  - snackbar --> palette.common.black

  对于 sinoui-components 中使用的 `divider`，表示的是选中后的背景色，推荐使用 `palette.action.selected` 代替。如果觉得颜色不合适，也可以使用灰色：`palette.grey[200]`。

- `palette.black`, `palette.white` 分别变更为 `palette.common.black`，`palette.common.white`

- 去掉了整个 `shades`

  sinoui-components 使用 `shades` 来取文本颜色：`palette.shades.dark.text.primary`。替换成新的获取文本颜色方式：`palette.getContrastText(背景色)`。

另一个重大变更：**不再提供颜色分类的集合，替换成包含 main, dark, light, contrastText 的对象**。这些颜色分类包括：`primary`, `secondary`, `error`, `success`, `info`, `success`。

旧的颜色分类集合：

```ts
{
  primary: {
    50: '#xxx',
    100: '#xxx',
    200: '#xxx',
    //...
  },
  secondary: {
    // ...
  },
  //...
}
```

新的颜色对象：

```ts
{
  primary: {
    main: '#xxx',
    light: '#xxx',
    dark: '#xxx',
    contrastText: '#xxx',
  },
  secondary: {
    // ...
  },
  // ...
}
```

`primary.main` 对应此颜色集合的主颜色，`primary.light` 是颜色集合的浅色变体，`primary.dark` 是颜色集合的深色变体，`primary.contrastText` 是在主颜色背景上的文字颜色。

如果需要获取更深或者更浅的颜色，可以使用 [polished](https://polished.js.org/) 的 `darken` 和 `lighten` 方法来获取，如：

```ts
import { darken, lighten } from 'polished';

const light = lighten(0.2, palette.primary.main);
const dark = darken(0.2, palette.primary.main);
```

#### zIndex

去掉了组件库中不使用的 z-index：

- drawerOverlay - 遮罩层
- navDrawer - 导航区域
- dialogOverlay - 对话框遮罩层
- layer - 新的应用层
- menu - 菜单
- mobileStepper

## v0.3.4 - 2019.12.19

- fix: 修复在 IE 中无法使用的缺陷

## v0.3.3 - 2019.10.22

- chore: 升级 polished@3.4.1

## v0.3.2 - 2019.10.22

- chore: polished 降版本到 1.9.2

## v0.3.1 - 2019.10.22

- chore: 补充缺失的导出方法

## v0.3.0 - 2019.10.22

- feat: 断点 ( #2 )
