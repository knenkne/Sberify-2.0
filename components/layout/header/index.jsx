import cx from 'classnames';
import { useRouter } from 'next/router';

import SearchIcon from '../../../public/icons/search.svg';
import { Route } from '../../../shared/constants';
import { Link } from '../../link';

// eslint-disable-next-line react/prop-types
const Header = ({ index }) => {
    // /albums/[id] -> /albums
    const { pathname } = useRouter();
    const [cleanPathname] = pathname.split('/[');

    return (
        <header className="relative flex items-center px-24 z-10 box-content col-span-full row-start-1 row-end-1">
            {/* TODO: mock for logo */}
            <div className="w-72 mr-10" />
            <nav className="flex justify-between w-72 font-archivo">
                {Object.keys(Route).map((pathName) => {
                    const active = cleanPathname === Route[pathName];

                    return (
                        <Link
                            className={cx(
                                'relative',
                                'text-base',
                                'px-0.5',
                                'uppercase',
                                !active &&
                                    (index
                                        ? 'text-[rgba(255,255,255,0.8)] hover:text-[#ffffff] hover:text-shadow-explicit'
                                        : 'text-secondary hover:text-tertiary-hover hover:text-shadow'),
                                active &&
                                    `font-medium ${index ? 'text-[#ffffff]' : 'text-primary'}
                                after:absolute
                                after:w-full
                                after:h-0.5
                                after:bottom-0
                                after:left-0
                                after:bg-gradient-to-r
                                after:from-brand-primary
                                after:to-brand-secondary`
                            )}
                            href={Route[pathName]}
                            key={pathName}
                        >
                            {pathName}
                        </Link>
                    );
                })}
            </nav>
            <div className="relative w-72 ml-10 h-8">
                <SearchIcon
                    className={cx(
                        'absolute',
                        'top-2',
                        'left-3',
                        'w-4',
                        'h-4',
                        index ? 'text-[#ffffff]' : 'text-primary',
                        'fill-current'
                    )}
                />
                <input
                    className={cx(
                        'w-full',
                        'h-full',
                        'pr-4',
                        'pl-8',
                        index ? 'text-[#ffffff]' : 'text-tertiary',
                        index ? 'bg-[rgba(255,255,255,0.2)]' : 'bg-primary',
                        'rounded-2xl'
                    )}
                />
            </div>
        </header>
    );
};

export default Header;
