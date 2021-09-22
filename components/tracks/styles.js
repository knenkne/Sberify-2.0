import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const TracksStyled = styled.ol`
    padding: 40px;
`;

export const TrackNumberStyled = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto';
    color: var(--secondary-text);
`;
export const TrackInfoStyled = styled.div`
    flex-grow: 1;
`;

export const TrackNameStyled = styled.h3`
    font-size: 16px;
    font-weight: 500;
    font-family: 'Roboto';
    color: var(--primary-text);
`;

export const TrackArtistsStyled = styled.ul`
    display: flex;
`;

export const TrackArtistStyled = styled.li`
    position: relative;
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text);

    /* Not a first (main) artist -> It's a feat */
    &:nth-of-type(2)::before {
        content: ' ft. ';
        color: var(--primary-text);
        white-space: pre;
    }

    &:nth-of-type(n + 3)::before {
        content: ', ';
        color: var(--primary-text);
        white-space: pre;
    }
`;

export const TrackPlayButtonStyled = styled.button`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 60px;
    height: 60px;
    background-color: var(--secondary-BG);
    opacity: 0;
    cursor: pointer;
    border-radius: 4px;

    /* &:focus {
        opacity: 1;
    } */

    svg {
        width: 16px;
        height: 16px;
        path {
            fill: var(--primary-text);
        }
    }
`;

// eslint-disable-next-line no-unused-vars
const explicitStyle = ({ explicit }) => {
    if (!explicit) {
        return '';
    }

    return css`
        ${TrackNameStyled}:after {
            content: 'E';
            /* font-weight: 500; */
            font-family: 'Roboto';
            display: inline-flex;
            align-items: center;
            justify-content: center;
            vertical-align: middle;
            font-size: 10px;
            line-height: 12px;
            width: 12px;
            height: 12px;
            color: var(--tertiary-BG);
            text-align: center;
            border-radius: 2px;
            background-color: var(--secondary-text);
            margin-left: 4px;
        }
    `;
};

export const TrackStyled = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    /* background: rgba(255, 255, 255, 0.2); */
    border-radius: 4px;
    /* overflow: hidden; */
    /* background: red; */

    &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background: linear-gradient(90deg, var(--primary-brand), var(--secondary-brand));
    }

    /* &:focus-within, */
    &:hover {
        background-color: var(--secondary-BG);

        &::after {
            content: '';
        }

        ${TrackPlayButtonStyled} {
            opacity: 1;
        }
    }
`;
