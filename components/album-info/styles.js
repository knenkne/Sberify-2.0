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

export const TracksStyled = styled.ul`
    padding: 40px;
`;

export const TrackNumberStyled = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    flex-shrink: 0;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Roboto';
    color: var(--secondary-text);
`;
export const TrackInfoStyled = styled.div`
    flex-grow: 1;
`;

export const TrackNameStyled = styled.h3`
    font-size: 16px;
    font-weight: 500;
    font-family: 'Roboto';
    color: var(--primary-text);
`;

export const FeatStyled = styled.span`
    color: var(--primary-text);
`;

export const TrackArtistStyled = styled.h4`
    font-size: 12px;
    font-weight: 500;
    color: var(--secondary-text);
`;

export const TrackPlayButtonStyled = styled.button`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    left: 0;
    top: 0;
    width: 60px;
    height: 60px;
    background-color: var(--secondary-BG);
    opacity: 0;
    cursor: pointer;

    &:focus {
        opacity: 1;
    }

    svg {
        width: 16px;
        height: 16px;
        path {
            fill: var(--primary-text);
        }
    }
`;

export const TrackStyled = styled.li`
    position: relative;
    display: flex;
    align-items: center;
    height: 60px;
    /* background: rgba(255, 255, 255, 0.2); */
    border-radius: 4px;
    overflow: hidden;

    &::after {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background: linear-gradient(90deg, var(--primary-brand), var(--secondary-brand));
    }

    &:hover,
    &:focus-within {
        background-color: var(--secondary-BG);

        &::after {
            content: '';
        }

        ${TrackPlayButtonStyled} {
            opacity: 1;
        }
    }
`;
