import PropTypes from 'prop-types';
import { useCallback } from 'react';

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
            // TODO: getTime
            const time = (percent * duration) / 100;

            rewind(time);
        },
        [duration]
    );

    return (
        <WrapperStyled>
            <PlayerStyled>
                {element}
                <ImageStyled src={image} alt={`${name} by ${artist}`} />
                <InfoStyled>
                    <SongNameStyled>{name}</SongNameStyled>
                    <ArtistNameStyled>{artist}</ArtistNameStyled>
                </InfoStyled>
                <Slider onChange={handleSliderChange} time={time} duration={duration} />
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
