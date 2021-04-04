import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { LinkStyled } from './styles';

const Link = ({ href, children }) => {
    const router = useRouter();
    console.log(router.pathname === href);
    return (
        <NextLink href={href} passHref>
            <LinkStyled active={router.pathname === href}>{children}</LinkStyled>
        </NextLink>
    );
};

export default Link;
