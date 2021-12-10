import PropTypes from 'prop-types';

// TODO: root folder
import { Cover } from '../../../common/cover';
import { FeatList } from '../../../common/feat-list';

const src = 'https://i.scdn.co/image/ab67616d00001e020b22aea43c47ee376680cc24';

const SidebarBody = ({ tracks }) => {
    return (
        <div className="no-scrollbar bg-primary h-full w-72 rounded-lg shadow-sidebar overflow-y-scroll ">
            <ul className="py-3">
                {tracks.map((track) => (
                    <li className="flex h-16 w-full px-4 items-center" key={track.id}>
                        <Cover
                            src={src}
                            alt="TODO:"
                            className="w-10 h-10 rounded overflow-hidden mr-2"
                        />
                        <div className="flex-grow">
                            {/* TODO: common */}
                            <h3 className="font-roboto font-medium text-primary leading-5 truncate text-sm">
                                {track.name}
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
