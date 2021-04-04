import { css } from '@emotion/core';
import styled from '@emotion/styled';

const activeStyle = ({ active }) => {
    if (!active) {
        return;
    }

    return css`
        font-weight: 500;
        color: var(--nav);

        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background: linear-gradient(90deg, var(--primary-brand), var(--secondary-brand));
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
    color: var(--nav-inactive);
    font-size: 16px;
    padding: 5px 2px;
    transition: 0.3s;

    &:not(:last-of-type) {
        /* margin-right: 20px; */
    }

    /* TODO: */
    &:hover {
        color: var(--nav);
        text-shadow: 0 0 1.4px #fff;
        /* font-weight: 500; */
    }

    ${activeStyle};
`;
