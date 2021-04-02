import Head from 'next/head';
import Link from 'next/link';
import PropTypes from 'prop-types';

import {
    BodyStyled,
    ContentStyled,
    DownBarStyled,
    HeaderStyled,
    LinkStyled,
    NavStyled,
    SearchStyled,
    ImageStyled,
    SideBarStyled
} from './styles';

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <BodyStyled>
                <SideBarStyled />
                <ContentStyled>
                    <HeaderStyled>
                        <NavStyled>
                            <Link href="/" passHref>
                                <LinkStyled>Discover</LinkStyled>
                            </Link>

                            <Link href="/library" passHref>
                                <LinkStyled>My Library</LinkStyled>
                            </Link>
                            <Link href="/radio" passHref>
                                <LinkStyled>Radios</LinkStyled>
                            </Link>
                        </NavStyled>
                        <SearchStyled />
                        {/* TODO: next/image */}
                        <ImageStyled src="https://avatars.githubusercontent.com/u/35743791?v=4" />
                    </HeaderStyled>
                    {children}
                </ContentStyled>
                <DownBarStyled />

                {/* <HeaderWrapperStyled>
                <HeaderStyled>
                    <NavStyled>
                        <ul>
                            <li>
                                <Link href="/">
                                    <LinkStyled active>Home</LinkStyled>
                                </Link>
                            </li>
                            <li>
                                <Link href="/artists">
                                    <LinkStyled>Artists</LinkStyled>
                                </Link>
                            </li>
                            <li>
                                <Link href="/track/0AHINsVlQQH5w9kXqvyNod">
                                    <LinkStyled>Albums</LinkStyled>
                                </Link>
                            </li>
                        </ul>
                    </NavStyled>
                    <Link href="/sign-up">
                        <SignUpStyled>Sign Up</SignUpStyled>
                    </Link>
                </HeaderStyled>
            </HeaderWrapperStyled>
            <MainStyled>{children}</MainStyled> */}
            </BodyStyled>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
};

export default Layout;
