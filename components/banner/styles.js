import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const WrapperStyled = styled.div`
    position: relative;
    /* display: flex; */
    /* align-items: center; */
    /* justify-content: center; */
    /* overflow: hidden; */
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 800px;
    z-index: -1;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 200px;
        background: linear-gradient(to top, #ffffff 20%, transparent 100%);
    }
`;

export const BannerStyled = styled.img`
    width: 100%;
    height: auto;
`;
