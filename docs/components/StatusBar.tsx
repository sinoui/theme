import React from 'react';
import styled from 'styled-components';

interface Props {
  status?: 'ok' | 'no' | 'caution';
}

const borderColor = {
  ok: '#4caf50',
  no: '#d32f2f',
  caution: '#f9a825',
};

const color = {
  ok: '#2e7b32',
  no: '#d32f2f',
  caution: '#f57f17',
};

const titleMap = {
  ok: '推荐。',
  no: '不能。',
  caution: '当心',
};

const StatusBarWrapper = styled.div<Props>`
  border-top: 15px solid ${(props) => borderColor[props.status]};
  color: ${(props) => color[props.status]};
  font-size: 14px;
  padding: 10px 0 2px;
  font-weight: 600;
`;

const StatusBar = ({ status }: Props) => {
  if (!status) {
    return null;
  }

  return (
    <StatusBarWrapper status={status}>{titleMap[status]}</StatusBarWrapper>
  );
};

export default StatusBar;
