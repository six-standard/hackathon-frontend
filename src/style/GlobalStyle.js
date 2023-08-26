import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  body {
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    margin: 0;
  }
  input {
    border: 0;
    outline: 0;
  }

  @font-face {
    font-family: Pretendard;
    src: url(@assets/fonts/Pretendard-Regular.woff) format(woff);
  }
`;

export default GlobalStyle;
