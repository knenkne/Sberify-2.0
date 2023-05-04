'use client';

import cx from 'classnames';
import { useSelectedLayoutSegment } from 'next/navigation';

import { Route } from '../../../shared/constants';
import { Link } from '../../common/link';
import { Search } from '../../search';

// eslint-disable-next-line react/prop-types
const Header = ({ index, className = '' }) => {
    const segment = useSelectedLayoutSegment();

    return (
        <header className={`${className} relative flex items-center z-10 box-content`.trim()}>
            <nav className="flex justify-between w-72 font-archivo">
                {Object.keys(Route).map((pathName) => {
                    const active = pathName.startsWith((segment || 'DISCOVER').toUpperCase());

                    return (
                        <Link
                            className={cx(
                                'relative',
                                'text-base',
                                'px-0.5',
                                'uppercase',
                                !active &&
                                    (index
                                        ? 'text-[rgba(255,255,255,0.7)] hover:text-[#ffffff] hover:text-shadow-explicit'
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
                            active={active}
                            key={pathName}
                        >
                            {pathName}
                        </Link>
                    );
                })}
            </nav>
            <Search index={index} />
        </header>
    );
};

export default Header;
