/* eslint-disable react/prop-types */
import NextLink from 'next/link';
import { useContext } from 'react';

import PauseIcon from '../../public/icons/pause.svg';
import PlayIcon from '../../public/icons/play.svg';
import { cleanName } from '../../shared/utils';
import { PlayerContext } from '../../store';
import { Link } from '../link';
import {
    TrackArtistsStyled,
    TrackArtistStyled,
    TrackInfoStyled,
    TrackNameStyled,
    TrackNumberStyled
    // TrackPlayButtonStyled,
    // TracksStyled
    // TrackStyled
} from './styles';

// common.constants

const Track = (props) => {
    const { id, name, artists, image, previewUrl, playing, onClick } = props;
    const handlePlayButtonClick = () => {
        onClick({
            id,
            artist: artists[0].name,
            name,
            image,
            src: previewUrl
        });
    };

    return (
        <li className="group relative flex items-center h-14 rounded hover:bg-secondary pl-14">
            {previewUrl && (
                <button
                    className="group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center w-14 h-14 bg-secondary opacity-0 cursor-pointer rounded"
                    onClick={handlePlayButtonClick}
                >
                    {!playing ? (
                        <PlayIcon className="w-4 h-4 fill-current text-primary" />
                    ) : (
                        <PauseIcon className="w-4 h-4 fill-current text-primary" />
                    )}
                </button>
            )}
            {/* <TrackNumberStyled>{i + 1}</TrackNumberStyled> */}
            <TrackInfoStyled>
                <TrackNameStyled>{cleanName(name)}</TrackNameStyled>
                <TrackArtistsStyled>
                    {artists.map(({ name, id }) => (
                        <TrackArtistStyled key={id}>
                            <Link
                                className="text-secondary hover:text-secondary-hover"
                                href={`/artist/${id}`}
                            >
                                {name}
                            </Link>
                        </TrackArtistStyled>
                    ))}
                </TrackArtistsStyled>
            </TrackInfoStyled>
            {previewUrl && <TrackNumberStyled>0:30</TrackNumberStyled>}
        </li>
    );
};

const Tracks = ({ tracks, image }) => {
    const { currentTrack, setTrack, paused } = useContext(PlayerContext);
    // TODO: useCallback insideusecallback
    const handlePlayButtonClick = (track) => setTrack(track);

    return (
        <ol className="pt-10 px-10 list-decimal list-inside text-purple-800">
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
        </ol>
    );
};
export default Tracks;
