/* eslint-disable react/prop-types */
import cx from 'classnames';
import { useMemo, useRef } from 'react';

// TODO: entry point + aliases
import { PauseIcon, PlayIcon, RepeatIcon, ShuffleIcon } from '../../public/icons';
import { cleanTitle } from '../../shared/utils';
import { FeatList } from '../common/feat-list';
import { Icon } from '../common/icon';
import { Slider } from '../common/slider';
import { withIndependentSlide } from '../common/slider/hoc';
import { usePlayer } from './';

const Player = ({ track, onTrackEnd }) => {
    const audioRef = useRef();
    const { name, artists, preview_url } = track;
    const { state, controls } = usePlayer({ audioRef, src: preview_url, onEnded: onTrackEnd });
    const value = ((state.time / state.duration) * 100 || 0).toFixed(1);

    const handlePlayClick = () => {
        controls.togglePlay();
    };

    const handleLoopClick = () => {
        controls.toggleLoop();
    };

    const handleShuffleClick = () => {
        controls.toggleShuffle();
    };

    const handleChange = (nextValue) => {
        if (value !== nextValue) {
            controls.rewind((nextValue / 100) * state.duration);
        }
    };

    const SliderWithIndependentSlide = useMemo(() => withIndependentSlide(Slider), []);

    return (
        <>
            <div className="flex h-full w-full items-center px-4">
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <audio ref={audioRef} />
                <Icon
                    Svg={state.isPlaying ? PauseIcon : PlayIcon}
                    className="relative z-10 w-10 h-10 shrink-0 mr-2 flex items-center justify-center rounded cursor-pointer after:absolute after:bg-primary after:w-full after:h-full after:opacity-70 after:-z-[1]"
                    svgClassName="w-5 h-5 fill-current text-primary"
                    onClick={handlePlayClick}
                />
                <div className="min-w-0 flex flex-col flex-grow mr-3">
                    {/* TODO: common with sidebar body */}
                    <h3 className="w-full relative block font-roboto font-medium text-primary leading-5 truncate text-sm">
                        {cleanTitle(name)}
                    </h3>
                    <h4 className="flex w-full font-roboto font-medium text-xs">
                        <FeatList artists={artists} className="font-roboto font-medium text-xs" />
                    </h4>
                </div>
                <Icon
                    Svg={ShuffleIcon}
                    className={cx(
                        'relative z-10 w-8 h-8 shrink-0 flex items-center justify-center rounded cursor-pointer hover:text-primary',
                        state.isShuffling ? 'text-primary' : 'text-secondary'
                    )}
                    svgClassName="w-5 h-5 fill-transparent stroke-current"
                    onClick={handleShuffleClick}
                />
                <Icon
                    Svg={RepeatIcon}
                    className={cx(
                        'relative z-10 w-8 h-8 shrink-0 flex items-center justify-center rounded cursor-pointer hover:text-primary',
                        state.isLooping ? 'text-primary' : 'text-secondary'
                    )}
                    svgClassName="w-5 h-5 fill-current"
                    onClick={handleLoopClick}
                />
            </div>
            <SliderWithIndependentSlide value={value} onChange={handleChange} />
        </>
    );
};

export default Player;
