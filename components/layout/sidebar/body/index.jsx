import PropTypes from 'prop-types';

// TODO: root folder
import { cleanName } from '../../../../shared/utils';
import { Cover } from '../../../common/cover';
import { FeatList } from '../../../common/feat-list';

const SidebarBody = ({ tracks }) => {
    return (
        <div className="no-scrollbar bg-primary h-full w-72 rounded-lg shadow-sidebar overflow-y-scroll">
            <ul className="py-3">
                {tracks.map((track) => (
                    <li
                        className="flex h-16 w-full px-4 items-center border-b border-b-secondary last-of-type:border-0"
                        key={track.id}
                    >
                        <Cover
                            src={track.album.images[2].url}
                            alt="TODO:"
                            className="w-10 h-10 rounded overflow-hidden mr-2 flex-shrink-0"
                        />
                        <div className="flex-grow">
                            {/* TODO: common */}
                            <h3 className="font-roboto font-medium text-primary leading-5 truncate text-sm">
                                {cleanName(track.name)}
                            </h3>
                            <FeatList
                                artists={track.artists}
                                className="font-roboto font-medium flex text-xs"
                            />
                        </div>
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
