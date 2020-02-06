/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import styled from 'styled-components';
import { createTypography } from '../../src';

const Wrapper = styled.div`
  border: 1px solid #ced4de;
  padding: 16px;
`;

export default function FontSizeTool() {
  const [fontSize, setFontSize] = useState('14');
  const { h4 } = createTypography({
    fontSize: !isNaN(parseInt(fontSize, 10)) ? parseInt(fontSize, 10) : 14,
  });

  return (
    <Wrapper>
      <label>
        typography.fontSize：
        <input
          type="number"
          value={fontSize}
          onChange={(event) => setFontSize(event.target.value)}
        />
      </label>
      <p>指定大小：34px</p>
      <p>实际大小：{parseFloat(h4.fontSize as string) * 16}px</p>
      <div>示例：</div>
      <p style={h4}>这是一段文本。</p>
    </Wrapper>
  );
}
