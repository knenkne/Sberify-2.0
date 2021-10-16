import { css } from '@emotion/react';
import styled from '@emotion/styled';

const SLIDER_HEIGHT = 4;
const THUMB_SIZE = SLIDER_HEIGHT * 3;

export const ThumbStyled = styled.div`
    position: absolute;
    background-color: var(--primary-text);
    border-radius: 50%;
    pointer-events: none;
    user-select: none;
    /* transition-duration: 0.05s; */
    /* transition-property: width, height; */
    /* transition-timing-function: ease-out; */
`;

export const SliderStyled = styled.div(
    ({ percent }) => css`
        position: relative;

        &::before {
            content: '';
            background-color: var(--primary-text);
            width: calc(
                ${THUMB_SIZE}px + 100% / 100 * ${percent} - (${THUMB_SIZE}px / 100 * ${percent})
            );
            height: ${SLIDER_HEIGHT}px;
            position: absolute;
            border-radius: 10px;
            top: 0;
            left: 0;
            pointer-events: none;
            user-select: none;
        }

        ${ThumbStyled} {
            left: ${percent}%;
            /* TODO: на клик увеличение */
            top: calc(50% - ${THUMB_SIZE}px / 2);
            width: ${THUMB_SIZE}px;
            height: ${THUMB_SIZE}px;
            margin-left: calc(${THUMB_SIZE}px / 100 * ${percent} * -1);
        }
    `
);

export const InputStyled = styled.input`
    display: block;
    -webkit-appearance: none;
    appearance: none;
    /* TODO: theme */
    background-color: rgba(255, 255, 255, 0.25);

    height: ${SLIDER_HEIGHT}px;
    width: 100%;
    cursor: pointer;
    opacity: 1;
    margin: 0 auto;
    border-radius: 10px;

    &:focus {
        outline: none;
    }

    /* TODO: убрать дублирование */
    &::-webkit-slider-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: var(--primary-text);
        /* z-index: 10; */
        opacity: 0;
        border: 0;
        cursor: pointer;
    }

    &::-moz-range-thumb {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background-color: red;
        /* z-index: 10; */
        opacity: 0;
        border: 0;
        cursor: pointer;
    }
`;
