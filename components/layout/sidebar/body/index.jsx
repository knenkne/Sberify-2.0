import PropTypes from 'prop-types';

import { SidebarItem } from '../item';

const SidebarBody = ({ tracks }) => {
    return (
        <div className="no-scrollbar bg-primary h-full w-72 rounded-lg shadow-sidebar overflow-y-scroll">
            <ul className="py-1">
                {tracks.map((track) => (
                    <SidebarItem key={track.id} {...track} />
                ))}
            </ul>
        </div>
    );
};

SidebarBody.propTypes = {
    tracks: PropTypes.array
};

export { SidebarBody };
