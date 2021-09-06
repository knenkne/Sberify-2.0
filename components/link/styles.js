import { css } from '@emotion/react';
import styled from '@emotion/styled';

const activeStyle = ({ active }) => {
    if (!active) {
        return;
    }

    return css`
        font-weight: 500;
        color: var(--nav-active);

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

const indexStyle = ({ active, index }) => {
    if (!index) {
        return '';
    }

    return css`
        color: ${active ? '#ffffff' : 'rgba(255, 255, 255, 0.8)'};

        &:hover {
            color: #ffffff;
        }
    `;
};

export const LinkStyled = styled.a`
    position: relative;
    font-family: 'Archivo';
    font-weight: 400;
    text-transform: uppercase;
    color: var(--nav);
    font-size: 16px;
    padding: 5px 2px;
    transition: 0.3s;

    &:hover {
        color: var(--nav-hover);
        text-shadow: var(--nav-hover-shadow);
    }

    ${activeStyle};
    ${indexStyle};
`;
