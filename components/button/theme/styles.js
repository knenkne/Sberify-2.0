import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const ThemeButtonStyled = styled.button`
    position: relative;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: auto;
    border: none;
    padding: 0;
`;

export const WaveStyled = styled.span`
    position: absolute;
    top: calc(50% - 1px);
    left: calc(50% - 1px);
    border-radius: 100%;
    width: 2px;
    height: 2px;
    display: block;
    z-index: -1;
    box-shadow: 0 0 0 0 #212121;
    transition: box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    .dark-mode & {
        background: #212121;
        box-shadow: 0 0 0 9999px #212121;
    }
`;
