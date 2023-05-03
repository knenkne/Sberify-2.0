/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/prop-types */
'use client';

import cx from 'classnames';
import { useMemo, useRef } from 'react';

import { PauseIcon, PlayIcon, RepeatIcon, ShuffleIcon } from '../../../public/icons';
import { cleanTitle } from '../../../shared/utils';
import { Cover } from '../../common/cover';
import { FeatList } from '../../common/feat-list';
import { withIndependentSlide, withSortable } from '../../common/hoc';
import { usePlayer } from '../../common/hooks/use-player';
import { Icon } from '../../common/icon';
import { Slider } from '../../common/slider';
import { SidebarBody } from './body';
import { SidebarHeader } from './header';
import { SidebarItem } from './item';

const Sidebar = ({ className = '', tracks: _tracks }) => {
    const audioRef = useRef();

    const { state, controls } = usePlayer({ audioRef, tracks: _tracks });
    const { tracks, isPlaying, isShuffling, isLooping, time, duration } = state;
    const { togglePlay, toggleShuffle, toggleLoop, rewind, reorder } = controls;

    const value = ((time / duration) * 100 || 0).toFixed(1);
    const [currentTrack, ...nextTracks] = tracks;

    const handlePlayClick = () => {
        togglePlay();
    };

    const handleShuffleClick = () => {
        toggleShuffle();
    };

    const handleLoopClick = () => {
        toggleLoop();
    };

    const handleChange = (nextValue) => {
        if (value !== nextValue) {
            rewind((nextValue / 100) * state.duration);
        }
    };

    const handleDragEnd = ({ active: prevTrack, over: nextTrack }) => {
        reorder(prevTrack, nextTrack);
    };

    const SiderbarBodyWithSortable = useMemo(() => withSortable(SidebarBody), []);
    const SliderWithIndependentSlide = useMemo(() => withIndependentSlide(Slider), []);

    return (
        <aside
            className={`${className} sticky top-24 flex flex-col z-20 max-h-[calc(100vh-96px-40px)]`.trim()}
        >
            <SidebarHeader>
                <div className="flex h-full w-full items-center px-4">
                    <audio ref={audioRef} />
                    <Icon
                        className="relative z-10 w-10 h-10 shrink-0 mr-2 flex items-center justify-center rounded cursor-pointer after:absolute after:bg-primary after:w-full after:h-full after:opacity-70 after:-z-[1]"
                        Svg={isPlaying ? PauseIcon : PlayIcon}
                        svgClassName="w-5 h-5 fill-current text-primary"
                        onClick={handlePlayClick}
                    />
                    <div className="min-w-0 flex flex-col flex-grow mr-3">
                        {/* TODO: common with sidebar body */}
                        <h3 className="w-full relative block font-roboto font-medium text-primary leading-5 truncate text-sm">
                            {cleanTitle(currentTrack.name)}
                        </h3>
                        <h4 className="flex w-full font-roboto font-medium text-xs">
                            <FeatList
                                artists={currentTrack.artists}
                                className="font-roboto font-medium text-xs"
                            />
                        </h4>
                    </div>
                    <Icon
                        className={cx(
                            'relative z-10 w-8 h-8 shrink-0 flex items-center justify-center rounded cursor-pointer hover:text-primary',
                            isShuffling ? 'text-primary' : 'text-secondary'
                        )}
                        Svg={ShuffleIcon}
                        svgClassName="w-5 h-5 fill-transparent stroke-current"
                        onClick={handleShuffleClick}
                    />
                    <Icon
                        className={cx(
                            'relative z-10 w-8 h-8 shrink-0 flex items-center justify-center rounded cursor-pointer hover:text-primary',
                            isLooping ? 'text-primary' : 'text-secondary'
                        )}
                        Svg={RepeatIcon}
                        svgClassName="w-5 h-5 fill-current"
                        onClick={handleLoopClick}
                    />
                </div>
                <SliderWithIndependentSlide value={value} onChange={handleChange} />
            </SidebarHeader>
            <SiderbarBodyWithSortable onDragEnd={handleDragEnd} items={nextTracks}>
                {nextTracks.map((track) => (
                    <SidebarItem
                        key={track.id}
                        className="border-b border-b-secondary last-of-type:border-0"
                    >
                        <Cover
                            // TODO: graphql schema
                            src={track.album?.images[2]?.url}
                            className="w-10 h-10 rounded overflow-hidden mr-2 flex-shrink-0"
                            shimmerClassName="bg-secondary"
                        />
                        <div className="min-w-0 flex flex-col flex-grow">
                            <h3 className="w-full relative block font-roboto font-medium text-primary leading-5 truncate text-sm">
                                {cleanTitle(track.name)}
                            </h3>
                            <h4 className="flex font-roboto font-medium text-xs">
                                <FeatList
                                    artists={track.artists}
                                    className="font-roboto font-medium text-xs"
                                />
                            </h4>
                        </div>
                    </SidebarItem>
                ))}
            </SiderbarBodyWithSortable>
        </aside>
    );
};

export default Sidebar;
