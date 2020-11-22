import { css, Global } from '@emotion/core'


const globalStyle = () => css`
  body {
    margin: 0;
    background-color: #fff;

    &.dark-mode {
      background-color: #000;
    }
  }
`

export const globalStyles = (
  <Global
    styles={globalStyle}
  />
)
