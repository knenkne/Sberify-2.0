import NextLink from 'next/link';
import PropTypes from 'prop-types';

const Link = ({ href, children, className = '' }) => {
    return (
        <NextLink href={href} passHref>
            <a className={`hover:text-shadow-explicit duration-300 ${className}`.trim()}>
                {children}
            </a>
        </NextLink>
    );
};

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string
};

export { Link };
