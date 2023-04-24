'use client';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

import DragIcon from '../../../../public/icons/drag.svg';
import { cleanTitle } from '../../../../shared/utils';
import { Cover } from '../../../common/cover';
import { FeatList } from '../../../common/feat-list';
import { SidebarItem } from '../item';

const SidebarBody = ({ tracks }) => {
    const [order, setOrder] = useState(tracks);

    return (
        <div className="w-72 h-full bg-primary rounded-lg shadow-md shadow-black/75 no-scrollbar overflow-y-scroll">
            <ul className="py-1 px-4">
                <ReactSortable
                    list={order}
                    setList={setOrder}
                    animation={200}
                    ghostClass="opacity-0"
                >
                    {order.map((track) => (
                        <li
                            key={track.id}
                            className="border-b border-b-secondary last-of-type:border-0"
                        >
                            <SidebarItem>
                                <Cover
                                    src={
                                        track.album?.images[2].url ||
                                        'https://i.scdn.co/image/ab67616d00001e02cf8c47967e5c6bbc7dca5abb'
                                    }
                                    alt="TODO:"
                                    className="w-10 h-10 rounded overflow-hidden mr-2 flex-shrink-0"
                                    shimmerClassName="bg-secondary"
                                />
                                <div className="min-w-0 flex flex-col">
                                    <h3 className="w-full relative block font-roboto font-medium text-primary leading-5 truncate text-sm">
                                        {cleanTitle(track.name)}
                                    </h3>
                                    <h4 className=" font-roboto font-medium text-xs truncate">
                                        <FeatList
                                            artists={track.artists}
                                            className="font-roboto font-medium text-xs"
                                        />
                                    </h4>
                                </div>
                                <button className="relative z-10 w-8 h-8 ml-auto flex items-center justify-center rounded cursor-pointer text-secondary hover:text-primary">
                                    <DragIcon className="w-5 h-5 stroke-current" />
                                </button>
                            </SidebarItem>
                        </li>
                    ))}
                </ReactSortable>
            </ul>
        </div>
    );
};

SidebarBody.propTypes = {
    tracks: PropTypes.array
};

export { SidebarBody };
