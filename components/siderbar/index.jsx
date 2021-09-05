// import ThemeButton from '../button/theme';
import NextLink from 'next/link';
import { useSession } from 'next-auth/client';

import Player from '../player';
import { HeaderStyled, ProfileStyled, SideBarStyled } from './styles';

const Sidebar = () => {
    const [session] = useSession();
    return (
        <SideBarStyled>
            <HeaderStyled>
                {session ? <ProfileStyled /> : <NextLink href="/auth">login</NextLink>}
                {/* <ThemeButton /> */}
            </HeaderStyled>
            <Player />
        </SideBarStyled>
    );
};

export default Sidebar;
