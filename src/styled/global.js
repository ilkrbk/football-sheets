import { Global, css } from "@emotion/react";

const style = css`
  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";
  @import "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap";

  * {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin-bottom: 0;
    font-weight: normal;
    font-style: normal;
  }
`;

export const GlobalStyle = () => {
  return <Global styles={style} />;
};
