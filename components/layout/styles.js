import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Link from 'next/link';

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
    width: 20%;
    min-width: 400px;
    max-width: 600px;
    box-shadow: 0px 1px 2px rgba(38, 38, 38, 0.04), 0px 4px 8px rgba(38, 38, 38, 0.16);
`;

export const ContentStyled = styled.main`
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
    margin-right: 60px;
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

export const SearchStyled = styled.input`
    width: 400px;
    background: rgba(38, 38, 38, 0.08);
    border-radius: 16px;
    padding: 0;
    padding: 8px 16px;
    border: none;

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

export const LinkStyled = styled.a`
    font-weight: 500;
    text-transform: uppercase;
    color: #ffffff;

    &:not(:last-of-type) {
        margin-right: 20px;
    }
`;
