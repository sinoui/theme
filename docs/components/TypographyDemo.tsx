import React from 'react';
import styled from 'styled-components';
import { createTypography } from '../../src';

const scaleCategory: {
  category: string;
  description?: string;
  component: React.ReactType;
}[] = [
  {
    category: 'h1',
    description: '一级标题',
    component: 'h1',
  },
  {
    category: 'h2',
    description: '二级标题',
    component: 'h2',
  },
  {
    category: 'h3',
    description: '三级标题',
    component: 'h3',
  },
  {
    category: 'h4',
    description: '四级标题',
    component: 'h4',
  },
  {
    category: 'h5',
    description: '五级标题',
    component: 'h5',
  },
  {
    category: 'h6',
    description: '六级标题',
    component: 'h6',
  },
  {
    category: 'subtitle1',
    description: '副标题1',
    component: 'h6',
  },
  {
    category: 'subtitle2',
    description: '副标题2',
    component: 'h6',
  },
  {
    category: 'body1',
    description:
      'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。以声明式编写 UI，可以让你的代码更加可靠，且方便调试。创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI。',
    component: 'p',
  },
  {
    category: 'body2',
    description:
      'React 使创建交互式 UI 变得轻而易举。为你应用的每一个状态设计简洁的视图，当数据改变时 React 能有效地更新并正确地渲染组件。以声明式编写 UI，可以让你的代码更加可靠，且方便调试。创建拥有各自状态的组件，再由这些组件构成更加复杂的 UI。',
    component: 'p',
  },
  {
    category: 'button',
    description: '按钮',
    component: 'div',
  },
  {
    category: 'caption',
    description: '说明',
    component: 'div',
  },
  {
    category: 'overline',
    component: 'div',
  },
];

const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.38);
  padding: 16px;
  display: flex;
  justify-content: center;
  font-family: ${(props) => props.theme.typography.fontFamily};

  > div {
    width: 100%;
    max-width: 560px;
  }
`;

export default function TypographyDemo() {
  const typography = createTypography();

  return (
    <Wrapper>
      <div>
        {scaleCategory.map(({ category, description, component: Comp }) => (
          <Comp style={typography[category]} key={category}>
            {category}. {description}
          </Comp>
        ))}
      </div>
    </Wrapper>
  );
}
