import styled from '@emotion/styled';

export const PlayerStyled = styled.article`
    width: 300px;
    margin: auto;
`;

export const WrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin: auto;
    /* background-color: #861657; */
    /* background-image: linear-gradient(326deg, #861657 0%, #ffa69e 74%); */
`;

export const ImageStyled = styled.img`
    display: block;
    width: 75%;
    border-radius: 5%;
    margin: 0 auto 15%;
`;

export const InfoStyled = styled.div`
    margin-bottom: 20px;
`;

export const SongNameStyled = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: var(--primary-text);
`;

export const ArtistNameStyled = styled.h2`
    font-size: 16px;
    font-weight: 400;
    color: var(--secondary-text);
`;

export const ControlsStyled = styled.div``;

export const PlayButtonStyled = styled.button`
    display: block;
    /* TODO: паддинг у контейнера инфо и контролов */
    margin: 20px auto;
    width: 40px;
    height: 40px;
    border-radius: 6px;
    cursor: pointer;
    background-color: var(--primary-text);
    border: none;
`;
