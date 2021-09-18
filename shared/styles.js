import { css, Global } from '@emotion/react';

const globalStyle = () => css`
    :root {
        --primary-BG: #ffffff;
        --secondary-BG: #eeeeee;
        --tertiary-BG: #f5f5f5;
        --nav-BG: rgba(255, 255, 255, 0.2);
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

    [data-theme='dark']:root {
        --primary-BG: #121212;
        --secondary-BG: #1e1e1e;
        --tertiary-BG: #252525;

        --nav: rgba(255, 255, 255, 0.8);
        --nav-active: #ffffff;
        --nav-hover: #ffffff;

        --primary-text: #ffffff;
        --secondary-text: rgba(255, 255, 255, 0.8);
        --secondary-text-hover: #ffffff;

        --secondary-shadow-1: -6px 4px 8px rgba(18, 18, 18, 0.48);
        --secondary-shadow-2: -6px 4px 12px rgba(18, 18, 18, 0.48);
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
    h6,
    p {
        margin: 0;
    }

    button {
        border: 0;
        margin: 0;
        padding: 0;
        background-color: transparent;
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

    .embla {
        /* overflow: hidden;
        height: 220px;
        flex-shrink: 0;
        margin-top: -50px;
        z-index: 10; */
    }

    .embla__container {
        /* display: flex;
        align-items: center;
        width: calc(100% - 40px);
        min-height: calc(100vh - 800px + 50px);
        height: 100%;
        margin-left: 40px; */
    }

    .embla__slide {
        /* width: fit-content;
        height: 60%;
        min-height: 140px;
        min-width: 140px;
        flex-shrink: 0;
        padding-right: 40px;
        box-sizing: content-box; */
    }
`;

export const withShimmer = ({ width = 140, height = 140 }) => css`
    background-image: url("data:image/svg+xml,%3Csvg aria-labelledby='loading-aria' preserveAspectRatio='none' role='img' viewBox='0 0 ${width} ${height}' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3ELoading%3C/title%3E%3Crect width='100%25' height='100%25' clip-path='url(%23b)' fill='url(%23a)'/%3E%3Cdefs%3E%3CclipPath id='b'%3E%3Crect x='71' y='79' width='1' height='7' rx='0' ry='0'/%3E%3Crect width='${width}' height='${height}' rx='0' ry='0'/%3E%3C/clipPath%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23ffffff' offset='.59996'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-2; -2; 1'/%3E%3C/stop%3E%3Cstop stop-color='%23eeeeee' offset='1.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-1; -1; 2'/%3E%3C/stop%3E%3Cstop stop-color='%23ffffff' offset='2.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='0; 0; 3'/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");

    [data-theme='dark'] & {
        background-image: url("data:image/svg+xml,%3Csvg aria-labelledby='loading-aria' preserveAspectRatio='none' role='img' viewBox='0 0 ${width} ${height}' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3ELoading%3C/title%3E%3Crect width='100%25' height='100%25' clip-path='url(%23b)' fill='url(%23a)'/%3E%3Cdefs%3E%3CclipPath id='b'%3E%3Crect x='71' y='79' width='1' height='7' rx='0' ry='0'/%3E%3Crect width='${width}' height='${height}' rx='0' ry='0'/%3E%3C/clipPath%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23121212' offset='.59996'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-2; -2; 1'/%3E%3C/stop%3E%3Cstop stop-color='%231e1e1e' offset='1.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-1; -1; 2'/%3E%3C/stop%3E%3Cstop stop-color='%23121212' offset='2.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='0; 0; 3'/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
    }
`;

export const globalStyles = <Global styles={globalStyle} />;
