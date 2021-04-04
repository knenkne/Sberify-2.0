import { css } from '@emotion/core';
import styled from '@emotion/styled';

const filledStyle = ({ filled }) => {
    if (!filled) {
        return '';
    }

    return css`
        color: #fff;
        background-color: #000;
        border-color: #000;

        &:hover {
            background-color: transparent;
        }

        .dark-mode & {
            color: #000;
            background-color: #fff;
            border-color: #fff;

            &:hover {
                background-color: transparent;
            }
        }
    `;
};

export const ButtonStyled = styled.a`
    display: block;
    height: 40px;
    line-height: 40px;
    text-align: center;
    text-transform: uppercase;
    width: 160px;
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 18px;
    background: linear-gradient(90deg, #ff4d4d, #f9cb28);
    border-radius: 16px;
    /* display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    padding: 0 25px;
    border: 1px solid #eaeaea;
    border-radius: 5px;
    text-align: center;
    font-weight: 500;
    color: #666;
    cursor: pointer;
    font-size: 16px;
    line-height: 48px;
    background-color: transparent;
    transition: all 0.2s ease;

    &:last-of-type {
        margin-left: 24px;
    }

    &:hover {
        color: #000;
        border-color: #000;
    }

    .dark-mode & {
        border-color: #333;

        &:hover {
            color: #fff;
            border-color: #fff;
        }
    }

    ${filledStyle}; */
`;
