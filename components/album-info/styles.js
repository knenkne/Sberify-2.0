import styled from '@emotion/styled';

import { withShimmer } from '../../shared/styles';

export const AlbumWrapperStyled = styled.div`
    padding: 100px 40px 40px;
    background-color: var(--secondary-BG);
    box-shadow: var(--secondary-shadow-1), var(--secondary-shadow-2);
`;

export const AlbumStyled = styled.div`
    display: flex;
    align-items: flex-end;
`;

export const CoverWrapperStyled = styled.div`
    position: relative;
    flex-shrink: 0;
    width: 300px;
    height: 300px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: -4px 4px 8px rgba(18, 18, 18, 0.08), -4px 4px 8px rgba(18, 18, 18, 0.08);
    margin-right: 20px;

    [data-theme='dark'] & {
        box-shadow: -4px 4px 8px rgba(18, 18, 18, 0.24), -4px 4px 8px rgba(18, 18, 18, 0.24);
    }

    ${withShimmer(300, 300)}
`;

export const AlbumInfoStyled = styled.div`
    position: relative;
    flex-grow: 1;
    /* Text overflow fix */
    min-width: 0;
`;

export const TitleStyled = styled.h2`
    margin: 0;
    font-size: 72px;
    /* line-height: 1; */
    font-weight: 500;
    font-family: 'Archivo';
    color: var(--primary-text);
    font-weight: 900;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* padding-bottom: 4px; */
`;

export const SubtitleStyled = styled.span`
    display: block;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    margin-left: 4px;
    margin-top: -8px;
    color: var(--secondary-text);
`;

export const LinkStyled = styled.a`
    color: var(--secondary-text);
    transition: 0.3s;

    &:hover {
        color: var(--secondary-text-hover);
        text-shadow: 0 0 1.4px var(--nav);
    }
`;
