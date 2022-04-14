/* eslint-disable react/prop-types */
import { SidebarBody } from './body';
import { SidebarHeader } from './header';

const Sidebar = () => {
    // const { data: { playlists = [] } = {}, loading: playlistsLoading } = useQuery(GET_PLAYLISTS);

    // const [{ id } = {}] = playlists;

    // const { data: { tracks = [] } = {}, loading: tracksLoading } = useQuery(GET_PLAYLIST_TRACKS, {
    //     skip: !id,
    //     variables: { id }
    // });

    // const loading = playlistsLoading || tracksLoading;

    // const [currentTrack = {}, ...restTracks] = tracks;

    return (
        // TODO: max-h w/ min-h
        <aside className="sticky top-24 z-20 row-start-2 row-end-7 col-start-1 col-end-1 flex flex-col pl-24 pb-10 max-h-[calc(100vh-96px)]">
            <SidebarHeader track={[]} />
            <SidebarBody tracks={new Array(20).fill({})} />
            {/* <HeaderStyled>
                <ProfileStyled />
                <ThemeButton />
            </HeaderStyled>
            <Player /> */}
        </aside>
    );
};

export default Sidebar;
