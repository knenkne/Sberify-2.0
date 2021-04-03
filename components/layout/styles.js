import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const BodyStyled = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(38, 38, 38, 0.08);
`;

export const SideBarStyled = styled.aside`
    position: sticky;
    top: 0;
    left: 0;
    background-color: #ffffff;
    height: calc(100vh - 75px);
    width: 480px;
    box-shadow: 0px 1px 2px rgba(38, 38, 38, 0.04), 0px 4px 8px rgba(38, 38, 38, 0.16);
`;

export const ContentStyled = styled.main`
    position: relative;
    flex-grow: 1;
    min-height: calc(100vh - 75px);
    height: 400vh;
`;

export const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 20px 40px;
`;

export const NavStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    width: 300px;
`;

export const DownBarStyled = styled.aside`
    position: sticky;
    left: 0;
    bottom: 0;
    height: 75px;
    width: 100%;
    background-color: #f5f5f5;
    box-shadow: 0px 1px 2px rgba(38, 38, 38, 0.04), 0px 8px 16px rgba(38, 38, 38, 0.16);
    z-index: 10;
`;

export const SearchWrapperStyled = styled.div`
    position: relative;
    width: 320px;
    margin-left: 40px;

    svg {
        position: absolute;
        left: 0;
        top: 0;
        width: 16px;
        height: 16px;
        top: calc(50% - 8px);
        left: 8px;

        path {
            transition: 0.1s;
            fill: rgba(255, 255, 255, 0.8);
        }
    }

    &:hover,
    &:focus-within {
        svg {
            path {
                fill: rgba(255, 255, 255, 1);
            }
        }
    }
`;

export const SearchStyled = styled.input`
    width: 100%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 0;
    padding: 8px 16px 8px 32px;
    border: none;
    border-radius: 16px;
    font-family: 'Roboto';
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);

    &:focus {
        outline: none;
    }
`;

export const ImageStyled = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    padding: 0;
    margin-left: auto;
`;
