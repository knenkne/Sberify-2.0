import styled from '@emotion/styled';

// TODO: common wrapper
export const WrapperStyled = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    min-height: 600px;
    margin-top: -80px;
    z-index: 1;

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

export const BannerStyled = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;
