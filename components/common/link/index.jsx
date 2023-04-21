import NextLink from 'next/link';
import PropTypes from 'prop-types';

const Link = ({ href, children, active, className = '' }) => {
    if (active) {
        return <span className={className.trim()}>{children}</span>;
    }

    return (
        <NextLink
            href={href}
            className={`hover:text-shadow-explicit transition-shadow duration-300 ${className}`.trim()}
        >
            {children}
        </NextLink>
    );
};

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node,
    active: PropTypes.bool,
    className: PropTypes.string
};

export { Link };
