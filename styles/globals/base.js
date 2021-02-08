import { css } from "styled-components";

// -------------------------------------------------------------
// Base.
// -------------------------------------------------------------

const boxModel = css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

const typography = css`
  html {
    font-size: var(--typographic-rhythm);
    font-family: var(--font-body-stack);
    line-height: var(--font-body-line-height);
  }

  body {
    font-size: var(--typographic-size);
  }
`;

const fullBodyViewportHeight = css`
  body {
    position: relative;
    min-height: 100vh;
    margin: 0;
  }
`;

const colors = css`
  html {
    color: var(--color-pagecontent);
    background: var(--color-page-overscroll);
  }
  body {
    background: var(--color-offwhite);
  }

  ::selection {
    color: var(--color-selection-foreground);
    background: var(--color-pagecontent);
  }

  a {
    color: var(--color-pagecontent);
  }
`;

const scroll = css`
  html {
    scroll-behavior: smooth;
  }
`;

export default css`
  ${boxModel}
  ${typography}
  ${fullBodyViewportHeight}
  ${colors}
  ${scroll}
`;
