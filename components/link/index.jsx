import NextLink from 'next/link';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Link = ({ href, children, className = '' }) => {
    return (
        <NextLink href={href} passHref>
            <a
                className={`hover:text-shadow-explicit duration-300 ${className}`.trim()}
                // className={cx(
                //     'relative',
                //     'font-archivo',
                //     'text-base',
                //     'px-0.5',
                //     'uppercase',
                //     'duration-300',
                //     !active &&
                //         (index
                //             ? 'text-[rgba(255,255,255,0.8)] hover:text-[#ffffff] hover:text-shadow-explicit'
                //             : 'text-secondary hover:text-tertiary-hover hover:text-shadow'),
                //     active &&
                //         `font-medium ${index ? 'text-[#ffffff]' : 'text-primary'}
                //         after:absolute
                //         after:w-full
                //         after:h-0.5
                //         after:bottom-0
                //         after:left-0
                //         after:bg-gradient-to-r
                //         after:from-brand-primary
                //         after:to-brand-secondary`
                // )}
            >
                {children}
            </a>
        </NextLink>
    );
};

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.node
};

export { Link };
