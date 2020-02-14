import React from 'react';
import createPalette from '../../../src/createPalette';
import Card from './Card';
import ColorDescList from '../color-desc-list';

const shades = ['light', 'main', 'dark'];
const categories = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
];

/**
 * 调色板颜色介绍
 */
export default function PaletteColorDesc() {
  const palette = createPalette();

  return (
    <Card>
      {categories.map((category) => (
        <ColorDescList
          title={category}
          key={category}
          items={shades.map((shade) => ({
            name: `palette.${category}.${shade}`,
            color: palette[category][shade],
          }))}
        />
      ))}
    </Card>
  );
}
