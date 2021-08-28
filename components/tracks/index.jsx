/* eslint-disable react/prop-types */
import NextLink from 'next/link';
import { useCallback, useEffect } from 'react';
import { atom, useRecoilState, useResetRecoilState } from 'recoil';

// TODO: common.styles
import { LinkStyled } from '../album-info/styles';
import usePlayer from '../player/use-player';
import { formatTime, getLeftTime } from '../player/utils';
import {
    FeatStyled,
    TrackArtistStyled,
    TrackInfoStyled,
    TrackNameStyled,
    TrackNumberStyled,
    TrackPlayButtonStyled,
    TracksStyled,
    TrackStyled
} from './styles';

const FEAT_REG = /\(()(feat|ft)/;

const playingTrackAtom = atom({
    key: 'playing-track-atom',
    default: null
});

const Track = ({ name, artists, id, i, preview_url }) => {
    const [cleanName] = name.split(FEAT_REG);

    const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackAtom);
    const resetPlayingTrack = useResetRecoilState(playingTrackAtom);

    const {
        element,
        state: { time, duration, paused },
        controls: { play, pause }
    } = usePlayer({ src: preview_url });

    const handlePlayButtonClick = useCallback(() => {
        if (paused) {
            play();
            setPlayingTrack(id);
        } else {
            pause();
            resetPlayingTrack();
        }
    }, [paused, element]);

    useEffect(() => {
        if (!paused && playingTrack !== id) {
            pause();
        }
    }, [id, playingTrack, paused]);

    return (
        <TrackStyled key={id}>
            {element}
            {preview_url && (
                <TrackPlayButtonStyled onClick={handlePlayButtonClick}>
                    {/* TODO: static */}
                    {paused ? (
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
                <TrackArtistStyled>
                    {artists.map(({ name, id }, i) => (
                        <>
                            {/* Not a first (main) artist -> It's a feat */}
                            {Boolean(i) && (i === 1 ? <FeatStyled> ft. </FeatStyled> : ', ')}
                            <NextLink href={`/artist/${id}`} passHref key={id}>
                                <LinkStyled>{name}</LinkStyled>
                            </NextLink>
                        </>
                    ))}
                </TrackArtistStyled>
            </TrackInfoStyled>
            {preview_url && (
                <TrackNumberStyled>-{formatTime(getLeftTime(time, duration))}</TrackNumberStyled>
            )}
        </TrackStyled>
    );
};

const Tracks = ({ tracks }) => (
    <TracksStyled>
        {tracks.items.map((track, i) => (
            <Track key={track.id} {...track} i={i} />
        ))}
    </TracksStyled>
);
export default Tracks;
