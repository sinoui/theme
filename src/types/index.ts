import 'styled-components';
import { Theme } from './Theme';

export * from './ColorSeries';
export * from './palette';
export * from './typography';
export * from './shadows';
export * from './Theme';
export * from './ThemeOptions';
export * from './z-index';
export * from './transitions';
export * from './spacing';
export * from './breakpoints';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    version: string;
  }
}
