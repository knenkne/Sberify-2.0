/* eslint-disable react/prop-types */
import cx from 'classnames';
import { useMemo } from 'react';

// TODO: entry point + aliases
import PauseIcon from '../../public/icons/pause.svg';
import PlayIcon from '../../public/icons/play.svg';
import RepeatIcon from '../../public/icons/repeat.svg';
import ShuffleIcon from '../../public/icons/shuffle.svg';
import { cleanTitle } from '../../shared/utils';
import { FeatList } from '../common/feat-list';
import { Slider } from '../common/slider';
import { withIndependentSlide } from '../common/slider/hoc';
import { usePlayer } from './';

const Player = ({ track, onTrackEnd }) => {
    const { name, artists, preview_url } = track || {};
    const { state, controls } = usePlayer(preview_url, onTrackEnd);
    const value = (state.time / state.duration) * 100 || 0;

    const handlePlayClick = () => {
        controls.togglePlay();
    };

    const handleLoopClick = () => {
        controls.toggleLoop();
    };

    const handleShuffleClick = () => {
        controls.toggleShuffle();
    };

    const handleChange = (value) => {
        controls.rewind((value / 100) * state.duration);
    };

    const WithIndependentSlide = useMemo(() => withIndependentSlide(Slider), []);

    return (
        <>
            <div className="flex h-full w-full items-center px-4">
                <button
                    className="relative z-10 w-10 h-10 shrink-0 mr-2 flex items-center justify-center rounded cursor-pointer after:absolute after:bg-primary after:w-full after:h-full after:opacity-70 after:-z-[1]"
                    onClick={handlePlayClick}
                >
                    {state.isPlaying ? (
                        <PauseIcon className="w-5 h-5 fill-current text-primary" />
                    ) : (
                        <PlayIcon className="w-5 h-5 fill-current text-primary" />
                    )}
                </button>
                <div className="min-w-0 flex flex-col flex-grow">
                    {/* TODO: common with sidebar body */}
                    <h3 className="w-full relative block font-roboto font-medium text-primary leading-5 truncate text-sm">
                        {cleanTitle(name)}
                    </h3>
                    <h4 className="flex w-full font-roboto font-medium text-xs">
                        <FeatList artists={artists} className="font-roboto font-medium text-xs" />
                    </h4>
                </div>
                <button
                    className={cx(
                        'relative z-10 w-8 h-8 shrink-0 ml-3 flex items-center justify-center rounded cursor-pointer hover:text-primary',
                        state.isShuffling ? 'text-primary' : 'text-secondary'
                    )}
                    onClick={handleShuffleClick}
                >
                    <ShuffleIcon className="w-5 h-5 fill-transparent stroke-current" />
                </button>
                <button
                    className={cx(
                        'relative z-10 w-8 h-8 shrink-0 flex items-center justify-center rounded cursor-pointer hover:text-primary',
                        state.isLooping ? 'text-primary' : 'text-secondary'
                    )}
                    onClick={handleLoopClick}
                >
                    <RepeatIcon className="w-5 h-5 fill-current" />
                </button>
            </div>
            <WithIndependentSlide value={value} onChange={handleChange} />
        </>
    );
};

export default Player;
