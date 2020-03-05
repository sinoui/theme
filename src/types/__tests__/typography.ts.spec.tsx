import React from 'react';
import styled from 'styled-components';
import createTypography from '../../createTypography';

it('字体样式可用于 style 属性', () => {
  const typography = createTypography();

  const div = <div style={typography.h1}>验证style属性类型</div>;

  expect(div).toBeDefined();
});

it('字体样式可用于 styled-components 组件中', () => {
  const typography = createTypography();

  const div = styled.div(typography.h1);

  expect(div).toBeDefined();
});

it('字体样式可用于 styled-components 字符串模板方式定义的组件中', () => {
  const typography = createTypography();

  const div = styled.div`
    ${typography.body1}
  `;

  expect(div).toBeDefined();
});
