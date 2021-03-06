import React from 'react';
import styled from 'styled-components';
import Row from './Row';
import Col from './Col';
import Video from './Video';

interface Props {
  title?: React.ReactNode;
  children?: React.ReactNode;
  img?: string;
  video?: string;
  mediaTitle?: React.ReactNode;
  noGutter?: boolean;
}

const Section = styled(Row)<{ noGutter?: boolean }>`
  ${({ noGutter }) => !noGutter && `margin-top: 36px;margin-bottom: 8px;`}

  & > *:first-child > *:first-child {
    margin-top: 0;
  }

  margin-bottom: 48px;
`;

const strToPElement = (element: React.ReactNode) => {
  return typeof element === 'string' ? <p>{element}</p> : element;
};

function Col2Section({
  title,
  children,
  img,
  video,
  noGutter,
  mediaTitle,
}: Props) {
  return (
    <Section as="section" gutter={40} noGutter={noGutter}>
      <Col xs={24} sm={12}>
        {title && <h4>{title}</h4>}
        {strToPElement(children)}
      </Col>
      <Col xs={24} sm={12} style={{ color: '#616161' }}>
        {img && <img src={img} alt="col-2-section-img" />}
        {video && <Video src={video} />}
        {strToPElement(mediaTitle)}
      </Col>
    </Section>
  );
}

export default Col2Section;
