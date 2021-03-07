import styled from '@emotion/styled';

export const WrapperStyled = styled.div`
    background-color: #fafafa;
    /* TODO: temporary */
    margin-top: 400px;
    height: 100vh;
    border-top: 1px solid #eaeaea;
`;

export const ReleasesStyled = styled.ul`
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
    padding: 20px 14px;
    margin-top: -60px;
`;

export const ReleaseStyled = styled.li`
    display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 140px;
    flex-shrink: 0;
    margin-right: 5px;
`;

export const CoverStyled = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 5px;
`;

export const NameStyled = styled.h3`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: #000;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ArtistStyled = styled.h4`
    margin: 0;
    font-size: 14px;
    font-weight: 500;
    color: #666;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
