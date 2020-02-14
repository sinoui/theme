import React from 'react';
import Card from './Card';
import ColorDescList from '../color-desc-list';
import { light, dark } from '../../../src/createPalette';

export default function TypeColorDesc({
  type,
  darkMode,
  title,
}: {
  type: string;
  darkMode?: boolean;
  title: string;
}) {
  const typeColor = darkMode ? dark[type] : light[type];

  if (typeof typeColor === 'string') {
    return (
      <Card darkMode={darkMode}>
        <ColorDescList
          items={[
            {
              name: `palette.${type}`,
              color: typeColor,
            },
          ]}
          title={title}
        />
      </Card>
    );
  }

  const keys = Object.keys(typeColor).filter(
    (key) => typeof typeColor[key] === 'string',
  );
  const items = keys.map((key) => ({
    name: `palette.${type}.${key}`,
    color: typeColor[key],
  }));

  return (
    <Card darkMode={darkMode}>
      <ColorDescList items={items} title={title} />
    </Card>
  );
}
