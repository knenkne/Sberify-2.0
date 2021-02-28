import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { BlockStyled, InputStyled, SliderStyled, ThumbStyled, TimeStyled } from './styles';

const getPercent = (time, duration) => ((time / duration) * 100).toFixed(1);
const getTime = (percent, duration) => Math.floor((percent * duration) / 100);
const getLeftTime = (time, duration) => Math.floor(duration - time);
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const leftSeconds = String(seconds % 60).padStart(2, '0');

    return `${minutes}:${leftSeconds}`;
};

const Slider = ({ onChange, time, duration }) => {
    const [percent, setPercent] = useState(0);
    const [isRewinding, setIsRewinding] = useState(false);

    const nextPercent = useMemo(() => getPercent(time, duration), [time, duration]);
    const currentTime = useMemo(() => getTime(percent, duration), [percent, duration]);
    const leftTime = useMemo(() => getLeftTime(currentTime, duration), [currentTime, duration]);

    useEffect(() => {
        if (!isRewinding) {
            setPercent(nextPercent);
        }
    }, [nextPercent]);

    useEffect(() => {
        // Preventing double taps for rewinding
        if (!isRewinding && nextPercent !== percent) {
            onChange(percent);
        }
    }, [isRewinding]);

    const handleMouseDown = useCallback(() => {
        setIsRewinding(true);
    }, []);

    const handleMouseUp = useCallback(() => {
        setIsRewinding(false);
    }, []);

    const handleChange = useCallback(({ target }) => {
        const { value: nextPercent } = target;

        setPercent(nextPercent);
    }, []);

    return (
        <>
            <SliderStyled percent={percent}>
                <ThumbStyled />
                <InputStyled
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    type="range"
                    step="0.1"
                    onChange={handleChange}
                    value={percent}
                />
            </SliderStyled>
            <BlockStyled>
                <TimeStyled>{formatTime(currentTime)}</TimeStyled>
                <TimeStyled>-{formatTime(leftTime)}</TimeStyled>
            </BlockStyled>
        </>
    );
};

Slider.propTypes = {
    onChange: PropTypes.func.isRequired,
    time: PropTypes.number,
    duration: PropTypes.number
};

export default Slider;
