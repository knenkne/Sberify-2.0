import styled from '@emotion/styled';

export const ReleasesStyled = styled.ul`
    position: relative;
    z-index: 1;
    width: 100%;
    overflow: hidden;
    /* margin: 0 auto; */
    padding: 0 40px;
    display: flex;
    margin-top: -100px;
    /* overflow: hidden; */
    /* justify-content: space-between; */
    /* overflow: hidden; */
    /* border-radius: 8px; */
    /* background-color: #fff; */
    /* box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12); */
    /* padding: 20px 14px; */
    /* margin-top: -60px; */
`;

export const ReleaseStyled = styled.li`
    width: 200px;
    height: 200px;
    flex-shrink: 0;

    &:not(:last-of-type) {
        margin-right: 48px;
    }
    /* display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 140px;
    flex-shrink: 0;
    margin-right: 5px; */
`;

export const CoverStyled = styled.img`
    width: 100%;
    height: auto;
    border-radius: 4px;
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
