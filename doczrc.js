/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
import url from 'url';
import math from 'remark-math';
import katex from 'remark-html-katex';
import html from 'remark-html';
import { resolve } from 'path';
import packageInfo from './package.json';

/**
 * 获取基本URL
 */
function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    const { name, homepage } = packageInfo;

    if (homepage) {
      return url.parse(homepage).path;
    }
    if (name.startsWith('@')) {
      return name.substr(name.indexOf('/'));
    }
    return `/${name}`;
  }
  return '/';
}

export default {
  title: 'theme',
  codeSandbox: false,
  typescript: true,
  files: ['**/*.mdx', 'docs/**/*.md'],
  public: './docs/assets',
  menu: [
    '开始',
    {
      name: '开发指南',
      menu: ['阴影', '调色板', '文字排版', '断点', 'z-index', '动效'],
    },
    {
      name: 'Material Design',
      menu: [
        '引言',
        '环境/表面',
        '环境/海拔',
        '环境/光与阴影',
        '布局/响应式布局网格',
        '布局/间距方法',
        '布局/组件行为',
        '颜色系统',
        '将颜色应用于UI',
        '颜色使用',
        '文本可读性',
        '动效/了解动效',
        '动效/速度',
        '动效/编排',
      ],
    },
  ],
  wrapper: 'docs/Wrapper.tsx',
  indexHtml: 'docs/index.html',
  mdPlugins: [math, html, katex],
  base: getBaseUrl(),
  onCreateWebpackChain: (config) => {
    // 配置webpack的方式：[webpack-chain](https://github.com/neutrinojs/webpack-chain)

    config.module
      .rule('css')
      .test(/\.css$/)
      .use('style-loader')
      .loader('style-loader')
      .end()
      .use('css-loader')
      .loader('css-loader')
      .options({
        importLoaders: 1,
      })
      .end()
      .use('postcss-loader')
      .loader('postcss-loader')
      .options({
        plugins: (loader) => [
          require('postcss-import')({ root: loader.resourcePath }),
          require('postcss-preset-env')({
            browsers: ['last 2 versions', 'not dead', 'IE 10', 'IE 11'],
          }),
        ],
      })
      .end();

    config
      .plugin('ghpages')
      .use(require('webpack-docz-ghpages-plugin'))
      .end();

    config.resolve
      .plugin('tsconfig-paths')
      .use(require('tsconfig-paths-webpack-plugin'))
      .end();

    config.resolve.alias.set('@', resolve(__dirname, 'docs/components')).end();

    config.watchOptions({
      ignored: ['node_modules', 'dist', '.cache', 'coverage', '.docz'],
    });

    return config;
  },
};
