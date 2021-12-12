/* eslint-disable react/prop-types */
// import ThemeButton from '../button/theme';
// import Player from '../player';
// import { HeaderStyled, ProfileStyled } from './styles';
import { SidebarBody } from './body';

const Sidebar = ({ playlist }) => {
    return (
        // TODO: max-h w/ min-h
        <aside className="sticky top-24 z-20 row-start-2 row-end-7 col-start-1 col-end-1 flex flex-col pl-24 pb-10 max-h-[calc(100vh-96px)]">
            <header className="bg-primary h-16 w-72 rounded-lg mb-4 flex-shrink-0 shadow-sidebar" />
            <SidebarBody tracks={playlist} />
            {/* <HeaderStyled>
                <ProfileStyled />
                <ThemeButton />
            </HeaderStyled>
            <Player /> */}
        </aside>
    );
};

export default Sidebar;
