/* eslint-disable react/prop-types */
import NextImage from 'next/image';
import NextLink from 'next/link';

import Tracks from '../tracks';
import {
    AlbumInfoStyled,
    AlbumStyled,
    AlbumWrapperStyled,
    CoverWrapperStyled,
    LinkStyled,
    SubtitleStyled,
    TitleStyled
} from './styles';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const AlbumInfo = (props) => {
    // TODO: parse on backend
    const { release_date } = props;
    const releseDateParsed = new Date(release_date);
    const releaseYear = releseDateParsed.getUTCFullYear();
    const releaseMonth = months[releseDateParsed.getUTCMonth()];

    return (
        <>
            <AlbumWrapperStyled>
                <AlbumStyled>
                    <CoverWrapperStyled>
                        <NextImage
                            src={props.images[1].url}
                            // TODO: alt
                            // alt={`${props.name} by ${props.artist}`}
                            layout="fixed"
                            width="300"
                            height="300"
                            unoptimized
                        />
                    </CoverWrapperStyled>
                    <AlbumInfoStyled>
                        <TitleStyled>{props.name}</TitleStyled>
                        <SubtitleStyled>
                            {props.artists.map(({ name, id }) => (
                                <>
                                    <NextLink href={`/artist/${id}`} passHref key={id}>
                                        <LinkStyled>{name}</LinkStyled>
                                    </NextLink>
                                    {` • `}
                                </>
                            ))}
                            {releaseMonth} {releaseYear}
                        </SubtitleStyled>
                    </AlbumInfoStyled>
                </AlbumStyled>
            </AlbumWrapperStyled>
            <Tracks tracks={props.tracks} />
        </>
    );
};

export default AlbumInfo;
