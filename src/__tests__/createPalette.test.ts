import { red } from 'src/colors';
import createPalette, {
  getContrastText,
  parsePaletteItem,
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
  expect(parsePaletteItem(red, getContrastTextFn)).toEqual({
    main: red[500],
    darken: red[700],
    lighten: red[300],
    contrastText: 'rgba(0, 0, 0, 0.87)',
  });
});

it('指定 main 解析调色板颜色', () => {
  const getContrastTextFn = () => 'rgba(0, 0, 0, 0.87)';

  expect(
    parsePaletteItem(
      {
        main: '#F44336',
      },
      getContrastTextFn,
    ),
  ).toEqual({
    main: '#F44336',
    darken: '#c4170b',
    lighten: '#f77e75',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  });
});

it('创建调色板', () => {
  const palette = createPalette();

  expect(palette.getContrastText('#F44336')).toBe('#fff');
  expect(palette.primary).toEqual({
    contrastText: '#fff',
    darken: '#303f9f',
    lighten: '#7986cb',
    main: '#3f51b5',
  });
});
