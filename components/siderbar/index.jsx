import ThemeButton from '../button/theme';
import Player from '../player';
import { HeaderStyled, ProfileStyled } from './styles';

const Sidebar = () => {
    return (
        <aside className="relative z-10 row-start-2 row-end-7 col-start-1 col-end-1 flex flex-col pl-24 pb-10">
            <header className="bg-primary h-16 w-72 rounded-lg mb-4 flex-shrink-0 shadow-sidebar" />
            <ul className="bg-primary h-full w-72 rounded-lg shadow-sidebar"></ul>
            {/* <HeaderStyled>
                <ProfileStyled />
                <ThemeButton />
            </HeaderStyled>
            <Player /> */}
        </aside>
    );
};

export default Sidebar;
