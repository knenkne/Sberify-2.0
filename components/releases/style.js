import { css } from '@emotion/core';
import styled from '@emotion/styled';

// TODO: embla to Styled
export const ReleasesStyled = styled.ul`
    z-index: 10;
    /* flex-grow: 1; */
`;

export const ReleaseStyled = styled.div`
    width: fit-content;
    height: 60%;
    min-height: 140px;
    min-width: 140px;
    flex-shrink: 0;

    /* padding-right: 40px; */
    box-sizing: content-box;
`;

const singleStyle = ({ single }) => {
    if (!single) {
        return;
    }

    return css``;
};

export const CoverWrapperStyled = styled.div`
    position: relative;
    z-index: 2;
    transition: 0.3s;
    height: 100%;
    /* TODO: border-radius vars */
    border-radius: 4px;
    overflow: hidden;
    /* TODO: w/ theme shadow */
    box-shadow: -6px 4px 8px rgba(18, 18, 18, 0.08), -6px 4px 12px rgba(18, 18, 18, 0.08);
    background-image: url("data:image/svg+xml,%3Csvg aria-labelledby='loading-aria' preserveAspectRatio='none' role='img' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3ELoading%3C/title%3E%3Crect width='100%25' height='100%25' clip-path='url(%23b)' fill='url(%23a)'/%3E%3Cdefs%3E%3CclipPath id='b'%3E%3Crect x='71' y='79' width='1' height='7' rx='0' ry='0'/%3E%3Crect width='140' height='140' rx='0' ry='0'/%3E%3C/clipPath%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23ffffff' offset='.59996'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-2; -2; 1'/%3E%3C/stop%3E%3Cstop stop-color='%23f5f5f5' offset='1.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-1; -1; 2'/%3E%3C/stop%3E%3Cstop stop-color='%23ffffff' offset='2.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='0; 0; 3'/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");

    [data-theme='dark'] & {
        background-image: url("data:image/svg+xml,%3Csvg aria-labelledby='loading-aria' preserveAspectRatio='none' role='img' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3ELoading%3C/title%3E%3Crect width='100%25' height='100%25' clip-path='url(%23b)' fill='url(%23a)'/%3E%3Cdefs%3E%3CclipPath id='b'%3E%3Crect x='71' y='79' width='1' height='7' rx='0' ry='0'/%3E%3Crect width='140' height='140' rx='0' ry='0'/%3E%3C/clipPath%3E%3ClinearGradient id='a'%3E%3Cstop stop-color='%23121212' offset='.59996'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-2; -2; 1'/%3E%3C/stop%3E%3Cstop stop-color='%23252525' offset='1.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-1; -1; 2'/%3E%3C/stop%3E%3Cstop stop-color='%23121212' offset='2.6'%3E%3Canimate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='0; 0; 3'/%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E");
    }
    /* Removing next/image blur cause there is no need on it, 
    also it causes square box bug on windows chrome */
    img {
        filter: none !important;
    }
`;

// TODO: onFocus
export const LinkStyled = styled.a`
    position: relative;
    display: block;
    height: 100%;

    &:focus-within,
    &:hover {
        /* TODO: FOCUS STYLE */
        outline: none;
        ${CoverWrapperStyled} {
            transform: translateY(-40px);
        }
    }

    ${singleStyle};
`;

export const InfoStyled = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0px;
`;

export const NameStyled = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Roboto';
    color: var(--primary-text);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ArtistStyled = styled.h4`
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
