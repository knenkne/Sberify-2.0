/* eslint-disable react/prop-types */
import { useCallback, useMemo } from 'react';

import PauseIcon from '../../public/icons/pause.svg';
import PlayIcon from '../../public/icons/play.svg';
import { cleanName } from '../../shared/utils';
import { Cover } from '../common/cover';
import { FeatList } from '../common/feat-list';
import { Slider } from '../common/slider';
import { withIndependentSlide } from '../common/slider/hoc';
import { usePlayer } from './use-player';

const Player = ({
    src = 'https://p.scdn.co/mp3-preview/232ec4947072d2765b40be161391bbf346ad9d85?cid=169f7aea4c204f00ba96ece98b15e24',
    name,
    artists,
    album
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
            <div className="flex h-full items-center flex-wrap px-4 ">
                <Cover
                    src={album?.images[2].url}
                    alt="TODO:"
                    className="w-10 h-10 rounded overflow-hidden mr-2 flex-shrink-0"
                    shimmerClassName="bg-secondary"
                />
                <button
                    className="absolute left-4 z-10 w-10 h-10 mr-2 flex items-center justify-center rounded cursor-pointer after:absolute after:bg-primary after:w-full after:h-full after:opacity-70 after:-z-[1]"
                    onClick={handleClick}
                >
                    {/* TODO: new icons */}
                    {!state.isPlaying ? (
                        <PlayIcon className="w-5 h-5 fill-current text-primary" />
                    ) : (
                        <PauseIcon className="w-5 h-5 fill-current text-primary" />
                    )}
                </button>
                <div className="truncate">
                    {/* TODO: common */}
                    <h3 className="font-roboto font-medium text-primary leading-5 truncate text-sm">
                        {cleanName(name)}
                    </h3>
                    <FeatList artists={artists} className="font-roboto font-medium flex text-xs" />
                </div>
            </div>
            <WithIndependentSlide value={value} onChange={handleChange} />
        </>
    );
};

export { Player };
