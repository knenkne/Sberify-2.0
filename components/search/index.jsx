/* eslint-disable react/prop-types */
import cx from 'classnames';

import SearchIcon from '../../public/icons/search.svg';
import { Template } from '../common/template';

// TODO: Remove index deps, classNames as props
const Search = ({ index }) => {
    return (
        <>
            {/* <div className="fixed bg-[rgba(0,0,0,0.8)] w-full h-full top-0 left-0">
                <Template />
            </div> */}
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
        </>
    );
};

export { Search };
