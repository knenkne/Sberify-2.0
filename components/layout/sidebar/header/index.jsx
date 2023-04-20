/* eslint-disable react/prop-types */

import Player from '../../../player';
import { SidebarItem } from '../item';

const SidebarHeader = ({ track }) => {
    return (
        <header className="relative w-72 mb-4 bg-primary  rounded-t-lg shadow-md shadow-black/75">
            <SidebarItem className="relative flex-wrap !px-0">
                <Player {...track} />
            </SidebarItem>
        </header>
    );
};

export { SidebarHeader };
