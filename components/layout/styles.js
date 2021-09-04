import { css } from '@emotion/core';
import styled from '@emotion/styled';

const indexStyle = ({ index }) => {
    if (!index) {
        return '';
    }

    return css`
        height: 100vh;

        ${SearchWrapperStyled} {
            svg {
                path {
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
        }

        ${SearchStyled} {
            background-color: rgba(255, 255, 255, 0.2);
        }
    `;
};

export const BodyStyled = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
`;

export const ContentStyled = styled.main`
    display: flex;
    flex-direction: column;
    position: relative;
    flex-grow: 1;
    width: calc(100% - 480px);
    margin-left: 400px;
    min-height: 100vh;

    /* TODO: custom properties */
    @media (max-width: 1599.98px) {
        margin-left: 0;
    }

    ${indexStyle};
`;

export const HeaderStyled = styled.header`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    min-height: 80px;
    padding: 20px 40px;
    z-index: 2;
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

    .dark-mode & {
        background-color: #1e1e1e;
        box-shadow: 0px 1px 2px rgba(18, 18, 18, 0.24), 0px 4px 8px rgba(18, 18, 18, 0.6);
    }
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
            fill: var(--nav);
        }
    }

    &:hover,
    &:focus-within {
        svg {
            path {
                fill: var(--nav-hover);
            }
        }
    }
`;

export const SearchStyled = styled.input`
    width: 100%;
    height: 30px;
    background: var(--primary-BG);
    border-radius: 16px;
    padding: 0;
    padding: 8px 16px 8px 32px;
    border: none;
    border-radius: 16px;
    font-family: 'Roboto';
    font-size: 16px;
    color: var(--nav);

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
