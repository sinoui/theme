import createTypography from '../createTypography';

it('创建默认的字体排版', () => {
  const typography = createTypography();

  expect(typography).toMatchSnapshot();
});

it('通过fontSize控制字体大小', () => {
  const typography = createTypography({
    fontSize: 12,
  });

  expect(typography.body2.fontSize).toBe('0.75rem');
  expect(typography.fontSize).toBe(12);
});

it('设置 htmlFontSize', () => {
  const typography = createTypography({
    htmlFontSize: 10,
  });

  expect(typography.body1.fontSize).toBe('1.6rem');
  expect(typography.htmlFontSize).toBe(10);
});

it('设置 fontFamily', () => {
  const typography = createTypography({
    fontFamily: 'Noto Sans SC',
  });

  expect(typography.fontFamily).toBe('Noto Sans SC');
});

it('设置字体类型样式', () => {
  const typography = createTypography({
    h1: {
      color: 'red',
    },
  });

  expect(typography.h1).toEqual({
    fontSize: '6rem',
    fontWeight: 300,
    letterSpacing: '-0.01562em',
    lineHeight: 1.167,
    color: 'red',
  });
});

it('使用 pxToRem 函数', () => {
  const { pxToRem } = createTypography();

  expect(pxToRem(16)).toBe('1rem');
});
