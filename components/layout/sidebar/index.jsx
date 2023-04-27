/* eslint-disable react/prop-types */
'use client';

import { arrayMove } from '@dnd-kit/sortable';
import { useMemo, useState } from 'react';

import { cleanTitle } from '../../../shared/utils';
import { Cover } from '../../common/cover';
import { FeatList } from '../../common/feat-list';
import { withSortable } from '../../common/hoc/with-sortable';
import { SidebarBody } from './body';
import { SidebarHeader } from './header';
import { SidebarItem } from './item';

const Sidebar = ({ className = '', tracks: _tracks }) => {
    const [tracks, setTracks] = useState(_tracks);

    const handleTrackEnd = () => {
        const [, ...nextTracks] = tracks;

        setTracks(nextTracks);
    };

    const handleDragEnd = ({ active, over }) => {
        const [currentTrack] = tracks;

        // If track is already playing
        if (currentTrack.id === active.id) {
            return;
        }
        const activeIndex = tracks.findIndex((track) => track.id === active.id);
        const overIndex = tracks.findIndex((track) => track.id === over.id);

        setTracks(arrayMove(tracks, activeIndex, overIndex));
    };

    const SiderbarBodyWithSortable = useMemo(() => withSortable(SidebarBody), []);
    const [currentTrack, ...nextTracks] = tracks;

    return (
        <>
            <div className="flex items-center w-72 mr-10 font-roboto font-extrabold text-2xl leading-none row-start-1 col-start-2 col-end-3 row-end-2 sticky top-0 z-20">
                СБЕРИФАЙ
            </div>
            <aside
                className={`${className} sticky top-24 flex flex-col z-20 max-h-[calc(100vh-96px-40px)]`.trim()}
            >
                <SidebarHeader track={currentTrack} onTrackEnd={handleTrackEnd} />
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
        </>
    );
};

export default Sidebar;
