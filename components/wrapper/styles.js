import { css } from '@emotion/core';
import styled from '@emotion/styled';

const shadelessStyle = ({ shadeless }) => {
    if (shadeless) {
        return '';
    }

    return css`
        &::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 250px;
            background: linear-gradient(to top, var(--secondary-BG) 20%, transparent 100%);
        }
    `;
};

export const WrapperStyled = styled.section`
    position: relative;
    width: 100%;
    overflow: hidden;
    min-height: 600px;
    /* TODO: header height constant */
    margin-top: -80px;
    z-index: 1;
    flex-grow: 1;
    background-color: var(--tertiary-BG);

    ${shadelessStyle};
`;
