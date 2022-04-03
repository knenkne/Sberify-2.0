/* eslint-disable react/prop-types */

import { Player } from '../../../player';

const SidebarHeader = ({ track }) => {
    return (
        <header className="relative w-72 h-16 rounded-t-lg mb-4 flex-shrink-0 bg-primary shadow-md shadow-black/75">
            <Player {...track} />
        </header>
    );
};

export { SidebarHeader };
