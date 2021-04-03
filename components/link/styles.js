import { css } from '@emotion/core';
import styled from '@emotion/styled';

const activeStyle = ({ active }) => {
    if (!active) {
        return;
    }

    return css`
        font-weight: 500;
        color: #ffffff;

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background: linear-gradient(90deg, #ff4d4d, #f9cb28);
        }

        &:hover {
            text-shadow: none;
        }
    `;
};

export const LinkStyled = styled.a`
    position: relative;
    font-family: 'Archivio';
    font-weight: 300;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.8);
    font-size: 16px;
    padding: 5px 2px;
    transition: 0.3s;

    &:not(:last-of-type) {
        /* margin-right: 20px; */
    }

    /* TODO: */
    &:hover {
        color: rgba(255, 255, 255, 1);
        text-shadow: 0 0 1.4px #fff;
        /* font-weight: 500; */
    }

    ${activeStyle};
`;
