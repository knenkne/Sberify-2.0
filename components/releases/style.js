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
    z-index: 1;
    transition: 0.3s;
    height: 100%;
    /* TODO: border-radius vars */
    border-radius: 4px;
    overflow: hidden;
    box-shadow: -6px 4px 8px rgba(18, 18, 18, 0.24), -6px 4px 12px rgba(18, 18, 18, 0.24);
    background-color: var(--primary-BG);

    /* Removing next/image blur cause there is no need on it, 
    also it causes square box bug on windows chrome */
    img {
        filter: blur(5px);
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
