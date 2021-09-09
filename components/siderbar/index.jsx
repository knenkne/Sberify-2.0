import ThemeButton from '../button/theme';
// import Player from '../player';
import { HeaderStyled, ProfileStyled } from './styles';

const Sidebar = () => {
    return (
        <aside className="w-1/5 bg-primary">
            <HeaderStyled>
                <ProfileStyled />
                <ThemeButton />
            </HeaderStyled>
            {/* <Player /> */}
        </aside>
    );
};

export default Sidebar;
