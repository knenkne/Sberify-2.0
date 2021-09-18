/* eslint-disable react/prop-types */
import NextLink from 'next/link';
import { useContext } from 'react';

import { FEAT_REGEXP } from '../../shared/constants';
import { PlayerContext } from '../../store';
// TODO: common.styles
import { LinkStyled } from '../album-info/styles';
import {
    TrackArtistsStyled,
    TrackArtistStyled,
    TrackInfoStyled,
    TrackNameStyled,
    TrackNumberStyled,
    TrackPlayButtonStyled,
    TracksStyled,
    TrackStyled
} from './styles';

// TODO: sanitize release also
// common.constants

const Track = ({ id, name, artists, image, i, preview_url, playing, onClick }) => {
    // TODO: parse at backennd
    const [cleanName] = name.split(FEAT_REGEXP);

    const handlePlayButtonClick = () => {
        onClick({
            id,
            artist: artists[0].name,
            name,
            image,
            src: preview_url
        });
    };

    return (
        <TrackStyled>
            {preview_url && (
                <TrackPlayButtonStyled onClick={handlePlayButtonClick}>
                    {/* TODO: static */}
                    {!playing ? (
                        <svg viewBox="0 0 460.114 460.114">
                            <path
                                d="M393.538,203.629L102.557,5.543c-9.793-6.666-22.468-7.372-32.94-1.832c-10.472,5.538-17.022,16.413-17.022,28.26v396.173
c0,11.846,6.55,22.721,17.022,28.26c10.471,5.539,23.147,4.834,32.94-1.832l290.981-198.087
c8.746-5.954,13.98-15.848,13.98-26.428C407.519,219.477,402.285,209.582,393.538,203.629z"
                            />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 47.607 47.607">
                            <g>
                                <path
                                    d="M17.991,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631C4.729,2.969,7.698,0,11.36,0
		l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"
                                />
                                <path
                                    d="M42.877,40.976c0,3.662-2.969,6.631-6.631,6.631l0,0c-3.662,0-6.631-2.969-6.631-6.631V6.631
		C29.616,2.969,32.585,0,36.246,0l0,0c3.662,0,6.631,2.969,6.631,6.631V40.976z"
                                />
                            </g>
                        </svg>
                    )}
                </TrackPlayButtonStyled>
            )}
            <TrackNumberStyled>{i + 1}</TrackNumberStyled>
            <TrackInfoStyled>
                <TrackNameStyled>{cleanName.trim()}</TrackNameStyled>
                <TrackArtistsStyled>
                    {artists.map(({ name, id }) => (
                        <TrackArtistStyled key={id}>
                            <NextLink href={`/artist/${id}`} passHref>
                                <LinkStyled>{name}</LinkStyled>
                            </NextLink>
                        </TrackArtistStyled>
                    ))}
                </TrackArtistsStyled>
            </TrackInfoStyled>
            {preview_url && <TrackNumberStyled>0:30</TrackNumberStyled>}
        </TrackStyled>
    );
};

const Tracks = ({ tracks, image }) => {
    const { currentTrack, setTrack, paused } = useContext(PlayerContext);
    // TODO: useCallback insideusecallback
    const handlePlayButtonClick = (track) => setTrack(track);

    return (
        <TracksStyled>
            {tracks.map((track, i) => (
                <Track
                    key={track.id}
                    // TODO: counter pseudo
                    i={i}
                    playing={currentTrack?.id === track.id && !paused}
                    onClick={handlePlayButtonClick}
                    image={image}
                    {...track}
                />
            ))}
        </TracksStyled>
    );
};
export default Tracks;
