/* eslint-disable react/prop-types */
// import ThemeButton from '../button/theme';
// import Player from '../player';
// import { HeaderStyled, ProfileStyled } from './styles';
import { SidebarBody } from './body';
import { SidebarHeader } from './header';

const Sidebar = ({ playlist }) => {
    const [currentTrack, ...restTracks] = playlist;

    return (
        // TODO: max-h w/ min-h
        <aside className="sticky top-24 z-20 row-start-2 row-end-7 col-start-1 col-end-1 flex flex-col pl-24 pb-10 max-h-[calc(100vh-96px)]">
            <SidebarHeader track={currentTrack} />
            <SidebarBody tracks={restTracks} />
            {/* <HeaderStyled>
                <ProfileStyled />
                <ThemeButton />
            </HeaderStyled>
            <Player /> */}
        </aside>
    );
};

export default Sidebar;
