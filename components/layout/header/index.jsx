import cx from 'classnames';

import SearchIcon from '../../../public/icons/search.svg';
import { Route } from '../../../shared/constants';
import Link from '../../link';

// eslint-disable-next-line react/prop-types
const Header = ({ index }) => {
    return (
        <header className="relative flex items-center px-24 z-10 box-content col-span-full row-start-1 row-end-1">
            {/* TODO: mock for logo */}
            <div className="w-72 mr-8" />
            <nav className="flex justify-between w-72">
                {Object.keys(Route).map((pathName) => (
                    <Link href={Route[pathName]} index={index} key={pathName}>
                        {pathName}
                    </Link>
                ))}
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
