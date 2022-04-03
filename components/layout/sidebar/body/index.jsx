import PropTypes from 'prop-types';

import { SidebarItem } from '../item';

const SidebarBody = ({ tracks }) => {
    return (
        <div className="w-72 h-full bg-primary rounded-lg shadow-md shadow-black/75 no-scrollbar overflow-y-scroll">
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
