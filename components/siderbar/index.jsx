import ThemeButton from '../button/theme';
import Player from '../player';
import { HeaderStyled, ProfileStyled, SideBarStyled } from './styles';

const Sidebar = () => {
    return (
        <SideBarStyled>
            <HeaderStyled>
                <ProfileStyled />
                <ThemeButton />
            </HeaderStyled>
            <Player />
        </SideBarStyled>
    );
};

export default Sidebar;
