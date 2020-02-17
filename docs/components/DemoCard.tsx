import styled from 'styled-components';

const DemoCard = styled.div`
  background: ${({
    theme: {
      palette: { grey, type },
    },
  }) => (type === 'light' ? grey[100] : '#333')};
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  border-radius: 4px;
  justify-content: space-around;
`;

export default DemoCard;
