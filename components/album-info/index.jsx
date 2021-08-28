/* eslint-disable react/prop-types */
import NextImage from 'next/image';
import NextLink from 'next/link';

import {
    AlbumInfoStyled,
    AlbumStyled,
    AlbumWrapperStyled,
    CoverWrapperStyled,
    FeatStyled,
    LinkStyled,
    SubtitleStyled,
    TitleStyled,
    TrackArtistStyled,
    TrackInfoStyled,
    TrackNameStyled,
    TrackNumberStyled,
    TrackPlayButtonStyled,
    TracksStyled,
    TrackStyled
} from './styles';

const FEAT_REG = /\(()(feat|ft)/;
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
            <TracksStyled>
                {props.tracks.items.map((track, i) => {
                    const [name] = track.name.split(FEAT_REG);
                    return (
                        <TrackStyled key={track.id}>
                            <TrackPlayButtonStyled>
                                <svg viewBox="0 0 460.114 460.114">
                                    <path
                                        d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
			c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
			c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"
                                    />
                                </svg>
                            </TrackPlayButtonStyled>
                            <TrackNumberStyled>{i + 1}</TrackNumberStyled>
                            <TrackInfoStyled>
                                <TrackNameStyled>{name}</TrackNameStyled>
                                <TrackArtistStyled>
                                    {track.artists.map(({ name, id }, i) => (
                                        <>
                                            {/* Not a first (main) artist -> It's a feat */}
                                            {Boolean(i) &&
                                                (i === 1 ? <FeatStyled> ft. </FeatStyled> : ', ')}
                                            <NextLink href={`/artist/${id}`} passHref key={id}>
                                                <LinkStyled>{name}</LinkStyled>
                                            </NextLink>
                                        </>
                                    ))}
                                </TrackArtistStyled>
                            </TrackInfoStyled>
                            <TrackNumberStyled>0:30</TrackNumberStyled>
                        </TrackStyled>
                    );
                })}
            </TracksStyled>
        </>
    );
};

export default AlbumInfo;
