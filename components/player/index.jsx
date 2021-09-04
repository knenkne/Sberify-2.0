import PropTypes from 'prop-types';
import { useCallback, useContext, useEffect, useMemo } from 'react';

import StoreContext from '../../store';
import { VOLUME_RATIO } from './constants';
import Slider from './slider';
import withTime from './slider/hoc/with-time';
import {
    ArtistNameStyled,
    ControlsStyled,
    ImageStyled,
    InfoStyled,
    PlayButtonStyled,
    PlayerStyled,
    SongNameStyled,
    WrapperStyled
} from './styles';
import usePlayer from './use-player';
import { getTime } from './utils';

const Player = () => {
    const { currentTrack, paused } = useContext(StoreContext);
    const { element, state, controls } = usePlayer({ src: currentTrack?.src });

    const { time, duration, volume } = state;
    const { play, pause, rewind, setVolume } = controls;

    const handlePlayButtonClick = useCallback(() => {
        if (paused) {
            play();
        } else {
            pause();
        }
    }, [paused]);

    const handleTimeSliderChange = useCallback(
        (percent) => {
            const time = getTime(percent, duration);

            rewind(time);
        },
        [duration]
    );

    const handleVolumeSliderChange = useCallback((percent) => {
        const ratio = percent / 100;

        setVolume(ratio);
    }, []);

    const TimeSlider = useMemo(() => withTime(Slider), []);
    const volumePercent = useMemo(() => (volume * 100 * VOLUME_RATIO).toFixed(1), [volume]);

    useEffect(() => {
        paused ? pause() : play();
    }, [paused]);

    useEffect(() => {
        currentTrack ? play() : pause();
    }, [currentTrack]);

    return (
        <WrapperStyled>
            <PlayerStyled>
                {element}
                <ImageStyled
                    src={currentTrack?.image}
                    alt={`${currentTrack?.name} by ${currentTrack?.artist}`}
                />
                <InfoStyled>
                    <SongNameStyled>{currentTrack?.name}</SongNameStyled>
                    <ArtistNameStyled>{currentTrack?.artist}</ArtistNameStyled>
                </InfoStyled>
                <TimeSlider time={time} duration={duration} onChange={handleTimeSliderChange} />
                <ControlsStyled>
                    <PlayButtonStyled onClick={handlePlayButtonClick} />
                </ControlsStyled>
                <Slider percent={volumePercent} onChange={handleVolumeSliderChange} />
            </PlayerStyled>
        </WrapperStyled>
    );
};

Player.propTypes = {
    artist: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    src: PropTypes.string
};

export default Player;
