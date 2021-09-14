/* eslint-disable react/prop-types */
import NextLink from 'next/link';
import { useContext } from 'react';

import PauseIcon from '../../public/icons/pause.svg';
import PlayIcon from '../../public/icons/play.svg';
import { FEAT_REGEXP } from '../../shared/constants';
import { PlayerContext } from '../../store';
import {
    TrackArtistsStyled,
    TrackArtistStyled,
    TrackInfoStyled,
    TrackNameStyled,
    TrackNumberStyled,
    // TrackPlayButtonStyled,
    TracksStyled
    // TrackStyled
} from './styles';

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
        <li className="group relative flex items-center h-14 rounded hover:bg-secondary">
            {preview_url && (
                <button
                    className="group-hover:opacity-100 absolute flex items-center justify-center w-14 h-14 bg-secondary opacity-0 cursor-pointer rounded"
                    onClick={handlePlayButtonClick}>
                    {!playing ? (
                        <PlayIcon className="w-4 h-4 fill-current text-primary" />
                    ) : (
                        <PauseIcon className="w-4 h-4 fill-current text-primary" />
                    )}
                </button>
            )}
            <TrackNumberStyled>{i + 1}</TrackNumberStyled>
            <TrackInfoStyled>
                <TrackNameStyled>{cleanName.trim()}</TrackNameStyled>
                <TrackArtistsStyled>
                    {artists.map(({ name, id }) => (
                        <TrackArtistStyled key={id}>
                            <NextLink href={`/artist/${id}`} passHref>
                                <a className="text-secondary duration-300 hover:text-secondary-hover hover:text-shadow">
                                    {name}
                                </a>
                            </NextLink>
                        </TrackArtistStyled>
                    ))}
                </TrackArtistsStyled>
            </TrackInfoStyled>
            {preview_url && <TrackNumberStyled>0:30</TrackNumberStyled>}
        </li>
    );
};

const Tracks = ({ tracks, image }) => {
    const { currentTrack, setTrack, paused } = useContext(PlayerContext);
    // TODO: useCallback insideusecallback
    const handlePlayButtonClick = (track) => setTrack(track);

    return (
        <TracksStyled>
            {tracks.items.map((track, i) => (
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
