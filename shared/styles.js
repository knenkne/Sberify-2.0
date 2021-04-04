import { css, Global } from '@emotion/core';

const globalStyle = () => css`
    /* TODO: */
    @font-face {
        font-family: 'Archivio';
        src: url('/fonts/Archivio/Light.ttf');
        font-style: normal;
        font-weight: 300;
        font-display: swap;
    }

    @font-face {
        font-family: 'Archivio';
        src: url('/fonts/Archivio/Regular.ttf');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: 'Archivio';
        src: url('/fonts/Archivio/SemiBold.ttf');
        font-style: normal;
        font-weight: 500;
        font-display: swap;
    }

    @font-face {
        font-family: 'Archivio';
        src: url('/fonts/Archivio/Bold.ttf');
        font-style: normal;
        font-weight: 800;
        font-display: swap;
    }

    /* Roboto */
    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto/Regular.ttf');
        font-style: normal;
        font-weight: 400;
        font-display: swap;
    }

    @font-face {
        font-family: 'Roboto';
        src: url('/fonts/Roboto/Medium.ttf');
        font-style: normal;
        font-weight: 500;
        font-display: swap;
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }

    ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0;
    }

    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        color: #666;
        font-weight: 400;
        font-size: 16px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        margin: 0;
        background-color: #fff;
    }
`;

export const globalStyles = <Global styles={globalStyle} />;
