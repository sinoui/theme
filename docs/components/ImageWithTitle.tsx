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
}

const Wrapper = styled.section`
  margin: 36px 0;
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
}: Props) {
  const Comp = noGutter ? 'section' : Wrapper;
  return (
    <Comp>
      {img && <img src={img} alt="img" />}
      {video && <Video src={video} />}
      <StatusBar status={status} />
      {children}
    </Comp>
  );
}
