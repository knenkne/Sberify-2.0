import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { LinkStyled } from './styles';

const Link = ({ href, children }) => {
    const { pathname } = useRouter();
    const [cleanPathname] = pathname.split('/[');

    return (
        <NextLink href={href} passHref>
            <LinkStyled active={cleanPathname === href}>{children}</LinkStyled>
        </NextLink>
    );
};

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.string
};

export default Link;
