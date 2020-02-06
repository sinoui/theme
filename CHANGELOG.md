# 版本变更说明

## v1.0.0-beta.0

- feat(typography): 采用新的 Material Design 标准设置字体排版分类
- feat(typography): 简化自定义字体排版的方式
- feat(typography): `typography` 新增 `pxToRem` 函数，用来转换 px 到 rem
- feat(typography): 可以定制字体排版分类样式
- feat: 新增 ThemeStyle 组件，用来定义全局 css 样式

### 破坏性变更

字体排版分类发生变化，之前的分类是：

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

新的字体排版分类：

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

自定义字体排版方式简化了。

旧的方式：

```ts
import { createTheme, createTypography } from '@sinoui/theme';

const theme = createTheme({
  typography: createTypography({
    fontSize: 12,
  }),
});
```

新的方式：

```ts
import { createTheme } from '@sinoui/theme';

const theme = createTheme({
  typography: {
    fontSize: 12,
  },
});
```

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
