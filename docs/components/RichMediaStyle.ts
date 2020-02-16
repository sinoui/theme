import { createGlobalStyle } from 'styled-components';

const RichMediaStyle = createGlobalStyle`
  .rich-media:not(:first-child) {
    margin-top: 64px;
  }
  margin-bottom: 64px;
`;

export default RichMediaStyle;
