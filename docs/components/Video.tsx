import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import pause from './images/pause.svg';
import play from './images/play.svg';

const Wrapper = styled.div<{ isPlaying: boolean; isHover: boolean }>`
  max-width: 100%;
  width: 100%;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: inline-flex;

  & > video {
    max-width: 100%;
  }

  &::before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    pointer-events: none;
    content: '';

    background: rgba(0, 0, 0, 0.5) url(${play}) no-repeat center center;
    background-size: 72px;

    transition: background-size 235ms cubic-bezier(0.4, 0, 0.2, 1),
      opacity 235ms cubic-bezier(0.4, 0, 0.2, 1);

    ${(props) =>
      props.isPlaying &&
      `
      background-image: url(${pause});
      opacity: ${props.isHover ? 1 : 0};
    `}
  }
`;

/**
 * 视频组件
 */
function Video({ src }: { src: string }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
      videoRef.current.pause();
    } else {
      setIsPlaying(true);
      setIsHover(false);
      videoRef.current.play();
    }
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Wrapper
      isPlaying={isPlaying}
      isHover={isHover}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video loop muted preload="metadata" onClick={handleClick} ref={videoRef}>
        <source src={src} />
      </video>
    </Wrapper>
  );
}

export default Video;
