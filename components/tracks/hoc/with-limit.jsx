/* eslint-disable no-unused-vars */
import cx from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import ChevronIcon from '../../../public/icons/chevron.svg';

const LIMIT = 5;

const withLimit = (WrappedTracks) => {
    const WithLimit = ({ tracks }) => {
        const [isLimited, setIsLimited] = useState(true);

        const handleClick = () => setIsLimited(!isLimited);

        return (
            <>
                <WrappedTracks tracks={isLimited ? tracks.slice(0, LIMIT) : tracks} />
                {tracks.length > LIMIT && (
                    <button
                        className="flex items-center h-4 ml-10 px-5 rounded text-secondary hover:text-primary mt-2 mb-auto"
                        onClick={handleClick}
                    >
                        <div
                            className={cx(
                                'flex items-center justify-center mr-5 h-full',
                                !isLimited && 'rotate-180'
                            )}
                        >
                            <ChevronIcon className="h-full fill-current" />
                        </div>
                        <span className="font-roboto font-medium text-xs">
                            {isLimited ? 'More tracks' : 'Less tracks'}
                        </span>
                    </button>
                )}
            </>
        );
    };

    WithLimit.displayName = `WithLimit(${WrappedTracks.name})`;
    WithLimit.propTypes = {
        tracks: PropTypes.array
    };

    return WithLimit;
};

export { withLimit };
