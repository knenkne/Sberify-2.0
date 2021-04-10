import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const ReleasesStyled = styled.ul`
    position: relative;
    z-index: 1;
    width: 100%;
    &::-webkit-scrollbar {
        display: none;
    }
    /* overflow: hidden; */
    /* margin: 0 auto; */
    flex-grow: 1;
    padding: 0 40px;
    display: flex;
    margin-top: -5px;
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
    width: 140px;
    height: 140px;
    flex-shrink: 0;
    /* box-shadow: 0 0 10px 2px var(--primary-brand); */

    &:not(:last-of-type) {
        margin-right: 36px;
    }
    /* display: flex;
    flex-direction: column;
    cursor: pointer;
    width: 140px;
    flex-shrink: 0;
    margin-right: 5px; */
`;

const singleStyle = ({ single }) => {
    if (!single) {
        return;
    }

    return css``;
};

export const CoverStyled = styled.img`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 4px;
    transition: 0.3s;
    z-index: 1;
    box-shadow: 0px 1px 2px rgba(18, 18, 18, 0.24), 0px 4px 8px rgba(18, 18, 18, 0.4);
`;

export const LinkStyled = styled.a`
    position: relative;
    display: block;

    &:hover {
        ${CoverStyled} {
            transform: translateY(-40px);
        }
    }

    ${singleStyle};
`;

export const InfoStyled = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0px;
    /* margin-top: - */
`;

export const NameStyled = styled.h3`
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    font-family: 'Roboto';
    color: var(--primary-text);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ArtistStyled = styled.h4`
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text);
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
