import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';

import withTime from './hoc/with-time';
import Slider from './slider';
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

    const { paused, time, duration } = state;
    const { play, pause, rewind } = controls;

    const handlePlayButtonClick = useCallback(() => {
        if (paused) {
            play();
        } else {
            pause();
        }
    }, [paused]);

    const handleSliderChange = useCallback(
        (percent) => {
            const time = getTime(percent, duration);

            rewind(time);
        },
        [duration]
    );

    const TimeSlider = useMemo(() => withTime(Slider), []);

    return (
        <WrapperStyled>
            <PlayerStyled>
                {element}
                <ImageStyled src={image} alt={`${name} by ${artist}`} />
                <InfoStyled>
                    <SongNameStyled>{name}</SongNameStyled>
                    <ArtistNameStyled>{artist}</ArtistNameStyled>
                </InfoStyled>
                <TimeSlider onChange={handleSliderChange} time={time} duration={duration} />
                <ControlsStyled>
                    <PlayButtonStyled onClick={handlePlayButtonClick} />
                </ControlsStyled>
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
