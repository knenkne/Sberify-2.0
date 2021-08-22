import { css, Global } from '@emotion/core';

const globalStyle = () => css`
    :root {
        --primary-BG: #ffffff;
        --secondary-BG: #eeeeee;
        --tertiary-BG: #f5f5f5;
        --primary-brand: #ff4d4d;
        --secondary-brand: #f9cb28;

        --nav: rgba(0, 0, 0, 0.8);
        --nav-active: #000000;
        --nav-hover: #000000;
        --nav-hover-shadow: 0 0 1.4px var(--nav-hover);

        --primary-text: #121212;
        --secondary-text: #505050;
        --secondary-text-hover: #000000;
        --secondary-text-hover-shadow: 0 0 1.4px var(--secondary-text-hover);

        --secondary-shadow-1: -6px 4px 8px rgba(18, 18, 18, 0.16);
        --secondary-shadow-2: -6px 4px 12px rgba(18, 18, 18, 0.16);
    }

    .dark-mode:root {
        --primary-BG: #121212;
        --secondary-BG: #1e1e1e;
        --tertiary-BG: #252525;

        --nav: rgba(255, 255, 255, 0.8);
        --nav-active: #ffffff;
        --nav-hover: #ffffff;

        --primary-text: #ffffff;
        --secondary-text: rgba(255, 255, 255, 0.8);
        --secondary-text-hover: #ffffff;

        --secondary-shadow-1: -6px 4px 8px rgba(18, 18, 18, 0.36);
        --secondary-shadow-2: -6px 4px 12px rgba(18, 18, 18, 0.36);
    }

    /* Archivio */
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

    @font-face {
        font-family: 'Archivio';
        src: url('/fonts/Archivio/ExtraBold.ttf');
        font-style: normal;
        font-weight: 900;
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
        background-color: var(--secondary-BG);
    }

    #nprogress .bar {
        width: 100%;
        background: linear-gradient(90deg, var(--primary-brand), var(--secondary-brand));
    }

    #nprogress .peg {
        display: none;
        height: 0px;
    }

    .swiper-container {
        position: relative;
        flex-shrink: 0;
        flex-grow: 1;
        z-index: 10;
        width: 100%;
        /* min-height: calc(100vh - 800px + 50px); */
        height: 220px;
        margin-top: -50px;
        padding-left: 40px;
    }

    .swiper-wrapper {
        width: 100%;
        display: flex;
        align-items: center;
    }
`;

export const globalStyles = <Global styles={globalStyle} />;
