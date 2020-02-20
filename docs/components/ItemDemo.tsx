import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { opacify } from 'polished';

const OpacifyItem = styled.div`
  padding: 16px;
  box-shadow: ${(props) => props.theme.shadows[2]};
  border-radius: 4px;

  background-color: ${({ theme }) =>
    opacify(-0.88, theme.palette.primary.main)};

  &:hover {
    background-color: ${({ theme }) =>
      opacify(-0.76, theme.palette.primary.main)};
  }
`;

const Item = styled.div`
  position: relative;
  overflow: hidden;
  padding: 16px;
  box-shadow: ${(props) => props.theme.shadows[2]};
  border-radius: 4px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;

    background-color: ${({ theme: { palette } }) => palette.primary.main};
    opacity: 0.12;

    transition: ${(props) =>
      props.theme.transitions.create(['background-color', 'opacity'])};
  }

  &:hover::before {
    opacity: 0.24;
  }
`;

export default function ItemDemo({ useOpacify }: { useOpacify?: boolean }) {
  const theme = useContext(ThemeContext);
  const [isHover, setIsHover] = useState(false);
  return useOpacify ? (
    <OpacifyItem
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p>
        color: {opacify(isHover ? -0.76 : -0.88, theme.palette.primary.main)}
      </p>
      <p>是否悬浮状态：{isHover ? '是' : '否'}</p>
    </OpacifyItem>
  ) : (
    <Item
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p>color: {theme.palette.primary.main}</p>
      <p>opacity: {isHover ? 0.24 : 0.12}</p>
      <p>是否悬浮状态：{isHover ? '是' : '否'}</p>
    </Item>
  );
}
