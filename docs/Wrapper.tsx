import React from 'react';
import './Wrapper.css';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src';

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper(props: WrapperProps) {
  const { children } = props;
  return (
    <ThemeProvider theme={defaultTheme}>
      <>{children}</>
    </ThemeProvider>
  );
}
