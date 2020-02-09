# 版本变更说明

## v1.0.0-beta.0

- feat(typography): 采用新的 Material Design 标准设置文字排版分类
- feat(typography): 简化自定义文字排版的方式
- feat(typography): `typography` 新增 `pxToRem` 函数，用来转换 px 到 rem
- feat(typography): 可以定制文字排版分类样式
- feat: 新增 ThemeStyle 组件，用来定义全局 css 样式
- chore(colors): 拆分 colors.ts 为一个颜色一个 ts 文件

### 破坏性变更

1. 文字排版分类发生变化，之前的分类是：

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

2. 自定义文字排版方式简化了。

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

3. colors模块剔除了非标准的颜色，包括：

   * transparent
   * fullBlack
   * darkBlack
   * lightBlack
   * minBlack
   * faintBlack
   * fullWhite
   * darkWhite
   * lightWhite

4. colors模块将 white 和 black 迁移到 color/common 中

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

5. colors模块去掉自定义颜色系列

  - colorBlack
  - colorDeepGray
  - colorBrown
  - colorGray
  - colorKelly
  - colorLigntYellow

6. colors模块去掉颜色系列中的 `w1`, `w2`, `w3`

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
