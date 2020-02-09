import warning from 'warning';
import indigo from './color/indigo';
import pink from './color/pink';
import grey from './color/grey';
import red from './color/red';
import green from './color/green';
import cyan from './color/cyan';
import amber from './color/amber';
import common from './color/common';
import getContrastRatio from './getContrastRatio';
import { PaletteOptions, Palette } from './types';

export const light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    icon: 'rgba(0, 0, 0, 0.38)',
    divider: 'rgba(0, 0, 0, 0.12)',
    lightDivider: 'rgba(0, 0, 0, 0.075)',
    snackbar: 'rgba(255,255,255,0.87)',
  },
  input: {
    bottomLine: 'rgba(0, 0, 0, 0.42)',
    helperText: 'rgba(0, 0, 0, 0.54)',
    labelText: 'rgba(0, 0, 0, 0.54)',
    inputText: 'rgba(0, 0, 0, 0.87)',
    disabled: 'rgba(0, 0, 0, 0.42)',
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)',
    hover: 'rgba(0, 0, 0, 0.08)',
    selected: 'rgba(0, 0, 0, 0.14)',
  },
  background: {
    default: grey[50],
    paper: common.white,
    appBar: grey[100],
    contentFrame: grey[200],
    divider: grey[200],
    chips: grey[300],
    chipsImg: grey[400],
    chipsBut: grey[400],
    chipsButHover: grey[500],
    tooltip: grey[600],
    transparent: 'rgba(0,0,0,0)',
    sendcondaryTransparent: 'rgba(255,255,255,0.87)',
    snackbar: common.black,
  },
};

export const dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    divider: 'rgba(255, 255, 255, 0.12)',
    lightDivider: 'rgba(255, 255, 255, 0.075)',
    snackbar: 'rgba(0,0,0,0.87)',
  },
  input: {
    bottomLine: 'rgba(255, 255, 255, 0.7)',
    helperText: 'rgba(255, 255, 255, 0.7)',
    labelText: 'rgba(255, 255, 255, 0.7)',
    inputText: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  action: {
    active: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    hover: 'rgba(255, 255, 255, 0.2)',
    selected: 'rgba(255, 255, 255, 0.14)',
  },
  background: {
    default: '#303030',
    chipsButHover: grey[400],
    chipsBut: grey[500],
    chipsImg: grey[600],
    tooltip: grey[700],
    chips: grey[700],
    paper: grey[800],
    appBar: grey[900],
    contentFrame: grey[900],
    status: common.black,
    sendcondaryTransparent: 'rgba(0,0,0,0.87)',
    snackbar: common.white,
    transparent: 'rgba(255, 255, 255)',
    divider: grey[200], // FIXME: 确认正确的dark主题下的分割线颜色
  },
};

export default function createPalette(options: PaletteOptions = {}): Palette {
  const {
    primary = indigo,
    accent = pink,
    error = red,
    success = green,
    info = cyan,
    warning: warningColor = amber,
    danger = red,
    type = 'light',
    contrastThreshold = 3,
  } = options;

  const shades = { dark, light };

  /**
   * 获取文本对比色
   *
   * @param background 文本的背景色
   */
  function getContrastText(background: string) {
    const contrastText =
      getContrastRatio(background, dark.text.primary) >= contrastThreshold
        ? dark.text.primary
        : light.text.primary;

    if (process.env.NODE_ENV !== 'production') {
      const contrast = getContrastRatio(background, contrastText);
      warning(
        contrast >= contrastThreshold,
        [
          `sinoui: ${contrastText}和${background}之间的对比度是${contrast}:1，`,
          '不满足WACG推荐的对比度值3:1。',
          'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast',
        ].join('\n'),
      );
    }

    return contrastText;
  }

  return {
    type,
    shades,
    text: shades[type].text,
    input: shades[type].input,
    action: shades[type].action,
    background: shades[type].background,
    primary,
    accent,
    error,
    success,
    info,
    warning: warningColor,
    danger,
    grey,
    white: common.white,
    black: common.black,
    getContrastText,
  };
}
