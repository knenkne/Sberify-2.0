import styled from '@emotion/styled';

export const InfoStyled = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 80px;
    right: 40px;
    width: 800px;
`;

export const BannerStyled = styled.img`
    width: 100%;
    height: auto;
    display: block;
`;

export const TitleStyled = styled.h3`
    width: 100%;
    position: relative;
    text-transform: uppercase;
    white-space: nowrap;
    font-size: 60px;
    line-height: 1;
    color: #fff;
    /* max-width: 800px; */
    text-align: center;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
    z-index: 1;
    font-family: 'Roboto';

    &::after {
        content: '';
        position: absolute;
        width: 760px;
        height: 100%;
        top: 0;
        left: 0;
        /* TODO: */
        z-index: -1;
        background-image: url('images/brush.svg');
        background-size: 100%;
        background-position: center;
        transform: scaleY(1.5) scaleX(1.25) rotate(2deg);
        background-repeat: no-repeat;
    }
`;
