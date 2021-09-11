/* eslint-disable no-unused-vars */
import cx from 'classnames';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Link = ({ href, children, index }) => {
    // /albums/[id] -> /albums
    const { pathname } = useRouter();
    const [cleanPathname] = pathname.split('/[');
    const active = cleanPathname === href;

    return (
        <NextLink href={href} passHref>
            <a
                className={cx(
                    'relative',
                    'font-archivo',
                    'text-base',
                    'px-0.5',
                    'uppercase',
                    'duration-300',
                    'hover:text-shadow',
                    'hover:text-tertiary-hover',
                    !active && (index ? 'text-[rgba(255,255,255,0.8)]' : 'text-tertiary'),
                    active &&
                        `font-medium ${
                            index ? 'text-[#ffffff]' : 'text-primary'
                        } after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-brand-primary after:to-brand-secondary`
                )}>
                {children}
            </a>
        </NextLink>
    );
};

Link.propTypes = {
    href: PropTypes.string,
    children: PropTypes.string
};

export default Link;
