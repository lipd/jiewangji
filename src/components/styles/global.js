import { css } from '@emotion/react'

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  html,
  body {
    font-family: BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
      sans-serif;
    font-size: 16px;
    background-color: #f4f7f9;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    outline: none;
  }
`

export default globalStyle
