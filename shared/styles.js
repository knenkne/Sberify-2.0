import { css, Global } from '@emotion/core';

const globalStyle = () => css`
    :root {
        --primary-BG: #ffffff;
        --secondary-BG: #eeeeee;
        --primary-brand: #ff4d4d;
        --secondary-brand: #f9cb28;

        --nav: #ffffff;
        --nav-inactive: rgba(255, 255, 255, 0.8);

        /* TODO: */
        --primary-text: #121212;
        --secondary-text: #1e1e1e;
    }

    .dark-mode:root {
        --primary-BG: #121212;
        --secondary-BG: #1e1e1e;

        --primary-text: #ffffff;
        --secondary-text: rgba(255, 255, 255, 0.8);
    }

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
        src: url('/fonts/Roboto/Light.ttf');
        font-style: normal;
        font-weight: 300;
        font-display: swap;
    }

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
        font-weight: 400;
        font-size: 16px;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        margin: 0;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const globalStyles = <Global styles={globalStyle} />;
