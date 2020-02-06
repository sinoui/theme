/* eslint-disable class-methods-use-this */
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import 'jest-styled-components';
import ThemeStyle from '../ThemeStyle';
import defaultTheme from '../defaultTheme';

it('产生全局样式', () => {
  const inject = jest.fn();
  renderer.create(
    <StyleSheetManager
      sheet={
        {
          hasId() {
            return false;
          },
          remove: () => 0,
          inject,
        } as any
      }
    >
      <ThemeProvider theme={defaultTheme}>
        <ThemeStyle />
      </ThemeProvider>
    </StyleSheetManager>,
  );

  expect(inject.mock.calls[0][1].join('\n')).toMatchSnapshot();
});

it('不产生字体分类样式', () => {
  const inject = jest.fn();
  renderer.create(
    <StyleSheetManager
      sheet={
        {
          hasId() {
            return false;
          },
          remove: () => 0,
          inject,
        } as any
      }
    >
      <ThemeProvider theme={defaultTheme}>
        <ThemeStyle disableTypography />
      </ThemeProvider>
    </StyleSheetManager>,
  );

  expect(inject.mock.calls[0][1].join('\n')).toMatchSnapshot();
});
