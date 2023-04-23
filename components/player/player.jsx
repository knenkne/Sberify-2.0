/* eslint-disable react/prop-types */
import { useCallback, useMemo } from 'react';

// TODO: entry point + aliases
import PauseIcon from '../../public/icons/pause.svg';
import PlayIcon from '../../public/icons/play.svg';
import RepeatIcon from '../../public/icons/repeat.svg';
import ShuffleIcon from '../../public/icons/shuffle.svg';
import { cleanTitle } from '../../shared/utils';
import { FeatList } from '../common/feat-list';
// import { FeatList } from '../common/feat-list';
import { Slider } from '../common/slider';
import { withIndependentSlide } from '../common/slider/hoc';
import { usePlayer } from './';

const Player = ({
    src = 'https://p.scdn.co/mp3-preview/232ec4947072d2765b40be161391bbf346ad9d85?cid=169f7aea4c204f00ba96ece98b15e24',
    name,
    artists
}) => {
    const { audio, state, controls } = usePlayer(src);
    const value = (state.time / audio?.duration) * 100 || 0;

    const handleClick = () => {
        controls.toggle();
    };

    const handleChange = useCallback(
        (value) => {
            controls.rewind((value / 100) * audio.duration);
        },
        [controls, audio]
    );

    const WithIndependentSlide = useMemo(() => withIndependentSlide(Slider), []);

    return (
        <>
            <div className="flex h-full w-full items-center flex-wrap px-4">
                <button
                    className="relative z-10 w-10 h-10 mr-2 flex items-center justify-center rounded cursor-pointer after:absolute after:bg-primary after:w-full after:h-full after:opacity-70 after:-z-[1]"
                    onClick={handleClick}
                >
                    {!state.isPlaying ? (
                        <PlayIcon className="w-5 h-5 fill-current text-primary" />
                    ) : (
                        <PauseIcon className="w-5 h-5 fill-current text-primary" />
                    )}
                </button>
                <div className="min-w-0 flex flex-col">
                    <h3 className="w-full relative block font-roboto font-medium text-primary leading-5 truncate text-sm">
                        {cleanTitle(name)}
                    </h3>
                    <FeatList artists={artists} className="font-roboto font-medium text-xs" />
                </div>

                <button className="relative z-10 w-8 h-8 ml-auto flex items-center justify-center rounded cursor-pointer text-secondary hover:text-primary">
                    <ShuffleIcon className="w-5 h-5 fill-transparent stroke-current" />
                </button>
                <button className="relative z-10 w-8 h-8 flex items-center justify-center rounded cursor-pointer text-secondary hover:text-primary">
                    <RepeatIcon className="w-5 h-5 fill-current" />
                </button>
            </div>
            <WithIndependentSlide value={value} onChange={handleChange} />
        </>
    );
};

export default Player;
