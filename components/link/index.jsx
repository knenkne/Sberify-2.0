import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { LinkStyled } from './styles';

const Link = ({ href, children }) => {
    const { pathname } = useRouter();
    // /albums/[id] -> /albums
    const [cleanPathname] = pathname.split('/[');

    return (
        <NextLink href={href} passHref>
            <LinkStyled active={cleanPathname === href}>{children}</LinkStyled>
        </NextLink>
    );
};

export default Link;
