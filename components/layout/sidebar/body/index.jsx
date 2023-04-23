import PropTypes from 'prop-types';

import { cleanTitle } from '../../../../shared/utils';
import { Cover } from '../../../common/cover';
import { FeatList } from '../../../common/feat-list';
import { SidebarItem } from '../item';

const SidebarBody = ({ tracks }) => {
    return (
        <div className="w-72 h-full bg-primary rounded-lg shadow-md shadow-black/75 no-scrollbar overflow-y-scroll">
            <ul className="py-1 px-4">
                {tracks.map((track) => (
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
                            <div className="min-w-0">
                                <h3 className="w-full relative block font-roboto font-medium text-primary leading-5 truncate text-sm">
                                    {cleanTitle(track.name)}
                                </h3>
                                <FeatList
                                    artists={track.artists}
                                    className="font-roboto font-medium text-xs"
                                />
                            </div>
                        </SidebarItem>
                    </li>
                ))}
            </ul>
        </div>
    );
};

SidebarBody.propTypes = {
    tracks: PropTypes.array
};

export { SidebarBody };
