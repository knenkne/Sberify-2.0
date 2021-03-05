import { css } from '@emotion/core';
import styled from '@emotion/styled';

const activeStyle = ({ active }) => {
    if (!active) {
        return '';
    }

    return css`
        position: relative;
        color: #000;

        &:before {
            content: '';
            display: block;
            position: absolute;
            left: 9px;
            right: 9px;
            bottom: 0;
            border-bottom: 2px solid;
        }

        .dark-mode & {
            color: #fff;
        }
    `;
};

export const LinkStyled = styled.a`
    display: inline-block;
    padding: 16px 12px;
    color: #666;
    transition: color 0.2s ease;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
        color: #000;
    }

    .dark-mode & {
        color: #888;

        &:hover {
            color: #fff;
        }
    }

    ${activeStyle};
`;

export const SignUpStyled = styled(LinkStyled)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    padding-top: 6px;
    padding-bottom: 6px;
    border: 1px solid #000;
    background-color: #000;
    border-radius: 5px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;

    &:hover {
        background-color: transparent;
    }

    transition-property: color, background-color;

    .dark-mode & {
        color: #000;
        background-color: #fff;
        border-color: #fff;

        &:hover {
            background-color: transparent;
        }
    }
`;

export const NavStyled = styled.nav`
    ul {
        display: flex;

        li:first-of-type {
            ${LinkStyled} {
                margin-left: -8px;
            }
        }
    }
`;

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1048px;
    padding: 0 24px;
    margin: 0 auto;
`;

export const LogoStyled = styled.h1`
    position: relative;
    width: 1048px;
    padding: 0 24px;
    margin: 0 auto;
    font-size: 32px;
    line-height: 30px;
    padding-top: 16px;
    font-weight: 400;
    text-transform: uppercase;
    color: #000;

    .dark-mode & {
        color: #fff;
    }
`;

export const HeaderWrapperStyled = styled.div`
    box-shadow: inset 0 -1px #eaeaea;

    .dark-mode & {
        box-shadow: inset 0 -1px #333;
    }
`;

export const MainStyled = styled.main`
    width: 1048px;
    padding: 0 24px;
    margin: 0 auto;
`;
