import React from 'react';
import styled from 'styled-components';
import Video from './Video';
import StatusBar from './StatusBar';

interface Props {
  children?: React.ReactNode;
  img?: string;
  video?: string;
  noGutter?: boolean;
  status?: 'ok' | 'no' | 'caution';
  marginTop?: number;
}

const Wrapper = styled.section`
  margin-bottom: 48px;
`;

/**
 * 带标题的图片
 */
export default function ImageWithTitle({
  children,
  img,
  video,
  noGutter,
  status,
  marginTop,
}: Props) {
  const Comp = noGutter ? 'section' : Wrapper;
  return (
    <Comp
      style={{
        marginTop,
        fontSize: 14,
        color: '#616161',
      }}
    >
      {img && <img src={img} alt="img" />}
      {video && <Video src={video} />}
      <StatusBar status={status} />
      {children}
    </Comp>
  );
}
