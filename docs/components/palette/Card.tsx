import styled from 'styled-components';

const Card = styled.div<{
  darkMode?: boolean;
}>`
  border-radius: 4px;
  color: rbga(0, 0, 0, 0.87);
  padding: 16px;
  margin: 16px 0;
  background: ${({ theme }) => theme.palette.grey[100]};
  ${({ darkMode }) =>
    darkMode &&
    `
    background-color: #303030;
    color: #fff;
  `}
`;

export default Card;
