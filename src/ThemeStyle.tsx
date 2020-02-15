import { createGlobalStyle, css } from 'styled-components';
import { ThemeTypography } from './types';

const typographyVariants: [keyof ThemeTypography, string][] = [
  ['h1', 'h1'],
  ['h2', 'h2'],
  ['h3', 'h3'],
  ['h4', 'h4'],
  ['h5', 'h5'],
  ['h6', 'h6'],
  ['subtitle1', '.subtitle1'],
  ['subtitle2', '.subtitle2'],
  ['body1', '.body1'],
  ['body2', '.body2'],
  ['caption', '.caption'],
  ['overline', '.overline'],
];

/**
 * 文字排版样式
 */
const typographyStyles = css(({ theme }) =>
  typographyVariants.reduce((acc, [key, cssSelector]) => {
    acc[cssSelector] = theme.typography[key];
    return acc;
  }, {} as Record<string, any>),
);

/**
 * 链接样式
 */
const linkStyle = css`
  a {
    color: ${(props) => props.theme.palette.secondary.main};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

interface Props {
  /**
   * 如果设置为 `true`，则不会产生文字排版相关的css。
   */
  disableTypography?: boolean;
  /**
   * 如果设置为 `true`，则不会为链接添加默认样式。
   */
  disableLink?: boolean;
}

/**
 * 主题全局样式
 */
const ThemeStyle = createGlobalStyle<Props>`
  html {
    font-size: ${(props) => props.theme.typography.htmlFontSize}px;
  }
  body {
    font-family: ${(props) => props.theme.typography.fontFamily};
    font-size: ${(props) => props.theme.typography.body2.fontSize};
    color: ${(props) => props.theme.palette.text.primary};
    font-variant: tabular-nums;
    background-color: ${(props) => props.theme.palette.background.default};
  }

  ${({ disableTypography }) => !disableTypography && typographyStyles}

  ${({ disableLink }) => !disableLink && linkStyle}
`;

export default ThemeStyle;
