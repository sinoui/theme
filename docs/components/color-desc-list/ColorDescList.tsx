import React from 'react';
import styled from 'styled-components';
import Row from '../Row';
import Col from '../Col';
import ColorDescItem from './ColorDescItem';

interface Props {
  dark?: boolean;
  title: string;
  items: {
    name: string;
    color: string;
  }[];
}

const H5 = styled.h5`
  font-size: 18px;
  line-height: 1.2em;
  margin: 8px 0;
  font-weight: 400;
`;

/**
 * 描述一组颜色的列表
 */
export default function ColorDescList({ items, title }: Props) {
  return (
    <div>
      <H5>{title}</H5>
      <Row>
        {items.map((item) => (
          <Col key={item.name} xs={24} sm={12} md={8}>
            <ColorDescItem name={item.name} color={item.color} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
