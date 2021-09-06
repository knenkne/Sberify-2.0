// import ThemeButton from '../button/theme';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { useSession } from 'next-auth/client';

import Player from '../player';
import { HeaderStyled, ProfileStyled, SideBarStyled } from './styles';

const Sidebar = () => {
    const [session] = useSession();
    console.log(session);
    return (
        <SideBarStyled>
            <HeaderStyled>
                {session ? (
                    <ProfileStyled>
                        <NextImage
                            src={session.user.image}
                            // TODO: alt
                            // alt={`${props.name} by ${props.artist}`}
                            width="40"
                            height="40"
                            unoptimized
                        />
                    </ProfileStyled>
                ) : (
                    <NextLink href="/auth">
                        <a>Login</a>
                    </NextLink>
                )}
                {/* <ThemeButton /> */}
            </HeaderStyled>
            <Player />
        </SideBarStyled>
    );
};

export default Sidebar;
