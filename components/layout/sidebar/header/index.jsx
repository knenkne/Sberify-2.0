/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// TODO: root folder
import { SidebarItem } from '../item';

const SidebarHeader = ({ track }) => (
    <header className="bg-primary w-72 rounded-lg mb-4 flex-shrink-0 shadow-sidebar">
        <SidebarItem {...track} />
    </header>
);

export { SidebarHeader };
