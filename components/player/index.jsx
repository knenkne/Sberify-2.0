import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';

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

const Player = ({ artist, name, image, src }) => {
    const { element, state, controls } = usePlayer({ src });

    const { paused, time, duration, volume } = state;
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

    return (
        <WrapperStyled>
            <PlayerStyled>
                {element}
                <ImageStyled src={image} alt={`${name} by ${artist}`} />
                <InfoStyled>
                    <SongNameStyled>{name}</SongNameStyled>
                    <ArtistNameStyled>{artist}</ArtistNameStyled>
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
