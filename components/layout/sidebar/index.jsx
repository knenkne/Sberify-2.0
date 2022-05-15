/* eslint-disable react/prop-types */
import { SidebarBody } from './body';
import { SidebarHeader } from './header';

const Sidebar = ({ className = '' }) => {
    return (
        // TODO: max-h w/ min-h
        <aside
            className={`${className} sticky top-24 flex flex-col z-20 max-h-[calc(100vh-96px-40px)]`.trim()}
        >
            <SidebarHeader track={[]} />
            <SidebarBody tracks={new Array(0).fill({})} />
            {/* <HeaderStyled>
                <ProfileStyled />
                <ThemeButton />
            </HeaderStyled>
            <Player /> */}
        </aside>
    );
};

export default Sidebar;
