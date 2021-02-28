import PropTypes from 'prop-types';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { BlockStyled, TimeStyled } from './styles';

const getPercent = (time, duration) => ((time / duration) * 100).toFixed(1);
const getTime = (percent, duration) => Math.floor((percent * duration) / 100);
const getLeftTime = (time, duration) => Math.floor(duration - time);
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const leftSeconds = String(seconds % 60).padStart(2, '0');

    return `${minutes}:${leftSeconds}`;
};

const withTime = (WrappedSlider) => {
    const WithTime = ({ onChange, time, duration }) => {
        const currentTrackPercent = useMemo(() => getPercent(time, duration), [time, duration]);

        const [percent, setPercent] = useState(currentTrackPercent);
        const [isRewinding, setIsRewinding] = useState(false);

        const currentTime = useMemo(() => getTime(percent, duration), [percent, duration]);
        const leftTime = useMemo(() => getLeftTime(currentTime, duration), [currentTime]);

        useEffect(() => {
            // Let the track precent lead if there is no rewinding
            if (!isRewinding) {
                setPercent(currentTrackPercent);
            }
        }, [currentTrackPercent]);

        useEffect(() => {
            // Set the new percent when rewinding has ended
            if (!isRewinding) {
                console.log(currentTrackPercent, percent);
                onChange(percent);
            }
        }, [isRewinding]);

        const handleChange = useCallback(
            (nextPercent) => {
                setPercent(nextPercent);
            },
            [isRewinding]
        );

        const handleMouseDown = useCallback(() => {
            setIsRewinding(true);
        }, []);

        const handleMouseUp = useCallback(() => {
            setIsRewinding(false);
        }, []);

        return (
            <>
                <WrappedSlider
                    percent={percent}
                    onChange={handleChange}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                />
                <BlockStyled>
                    <TimeStyled>{formatTime(currentTime)}</TimeStyled>
                    <TimeStyled>-{formatTime(leftTime)}</TimeStyled>
                </BlockStyled>
            </>
        );
    };

    WithTime.displayName = `WithTime(${WrappedSlider.name})`;
    WithTime.propTypes = {
        onChange: PropTypes.func.isRequired,
        time: PropTypes.string,
        duration: PropTypes.duration
    };

    return WithTime;
};

export default withTime;
