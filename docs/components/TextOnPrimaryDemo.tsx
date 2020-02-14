import React from 'react';
import createPalette from '../../src/createPalette';

export default function TextOnPrimaryDemo() {
  const palette = createPalette();
  return (
    <div
      style={{
        border: `1px solid ${palette.primary.dark}`,
        background: palette.primary.main,
        borderRadius: 4,
        padding: 8,
        margin: '16 4',
        color: palette.primary.contrastText,
      }}
    >
      背景色是 palette.primary.main，文本颜色是 palette.primary.contrastText。
    </div>
  );
}
