import { red, pink, grey } from 'src/colors';
import createPalette, {
  getContrastText,
  parsePaletteColor,
  light,
  dark,
} from '../createPalette';

it('获取符合对比度的文本颜色', () => {
  expect(getContrastText('#F44336', 3, '#fff', 'rgba(0, 0, 0, 0.87)')).toBe(
    '#fff',
  );
  expect(getContrastText('#E57373', 3, '#fff', 'rgba(0, 0, 0, 0.87)')).toBe(
    'rgba(0, 0, 0, 0.87)',
  );
});

it('以颜色系列解析调色板颜色', () => {
  const getContrastTextFn = () => 'rgba(0, 0, 0, 0.87)';
  expect(parsePaletteColor(red, getContrastTextFn)).toEqual({
    main: red[500],
    dark: red[700],
    light: red[300],
    contrastText: 'rgba(0, 0, 0, 0.87)',
  });
});

it('指定 main 解析调色板颜色', () => {
  const getContrastTextFn = () => 'rgba(0, 0, 0, 0.87)';

  expect(
    parsePaletteColor(
      {
        main: '#F44336',
      },
      getContrastTextFn,
    ),
  ).toEqual({
    main: '#F44336',
    dark: '#c4170b',
    light: '#f77e75',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  });
});

it('指定不同深浅关键词', () => {
  const getContrastTextFn = () => 'rgba(0, 0, 0, 0.87)';
  expect(
    parsePaletteColor(red, getContrastTextFn, 'A400', 'A200', 'A700'),
  ).toEqual({
    main: red.A400,
    dark: red.A700,
    light: red.A200,
    contrastText: 'rgba(0, 0, 0, 0.87)',
  });
});

it('使用调色板中产生文本颜色的函数', () => {
  const palette = createPalette();

  expect(palette.getContrastText('#F44336')).toBe('#fff');
});

it('产生默认的主颜色', () => {
  const palette = createPalette();
  expect(palette.primary).toEqual({
    contrastText: '#fff',
    dark: '#303f9f',
    light: '#7986cb',
    main: '#3f51b5',
  });
});

it('指定主颜色', () => {
  const palette = createPalette({
    primary: {
      main: red[500],
    },
  });

  expect(palette.primary).toEqual({
    contrastText: '#fff',
    dark: '#c4170b',
    light: '#f77e75',
    main: '#f44336',
  });
});

it('产色默认的辅助色', () => {
  const palette = createPalette();

  expect(palette.secondary).toEqual({
    contrastText: '#fff',
    dark: pink.A700,
    light: pink.A200,
    main: pink.A400,
  });
});

it('指定辅助色', () => {
  const palette = createPalette({
    secondary: red,
  });

  expect(palette.secondary).toEqual({
    contrastText: '#fff',
    dark: '#d50000',
    light: '#ff5252',
    main: '#ff1744',
  });
});

it('指定了主颜色，但没有指定辅助颜色，则辅助颜色等于主颜色', () => {
  const palette = createPalette({
    primary: red,
  });

  expect(palette.secondary).toEqual(palette.primary);
});

it('产生其他颜色分类', () => {
  const palette = createPalette();

  expect(palette.error).toEqual({
    contrastText: '#fff',
    dark: '#d32f2f',
    light: '#e57373',
    main: '#f44336',
  });
  expect(palette.warning).toEqual({
    contrastText: 'rgba(0, 0, 0, 0.87)',
    dark: '#f57c00',
    light: '#ffb74d',
    main: '#ff9800',
  });
  expect(palette.info).toEqual({
    contrastText: '#fff',
    dark: '#1976d2',
    light: '#64b5f6',
    main: '#2196f3',
  });
  expect(palette.success).toEqual({
    contrastText: 'rgba(0, 0, 0, 0.87)',
    dark: '#388e3c',
    light: '#81c784',
    main: '#4caf50',
  });
});

it('grey', () => {
  const palette = createPalette();

  expect(palette.grey).toEqual(grey);
});

it('light color', () => {
  const palette = createPalette();

  expect(palette.type).toBe('light');
  expect(palette.text).toEqual(light.text);
});

it('dark color', () => {
  const palette = createPalette({
    type: 'dark',
  });

  expect(palette.type).toBe('dark');
  expect(palette.text).toEqual(dark.text);
});

it('set text color', () => {
  const palette = createPalette({
    text: {
      primary: 'rgba(0, 0, 0, 0.92)',
    },
  });

  expect(palette.text.primary).toBe('rgba(0, 0, 0, 0.92)');
});

it('使用 createPalette() 的结果再次调用 createPalette()', () => {
  const paletteA = createPalette({
    primary: {
      main: red[600],
    },
  });
  const paletteB = createPalette(paletteA);

  expect(paletteB).toEqual(paletteA);
});
