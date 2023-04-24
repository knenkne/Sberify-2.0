import cx from 'classnames';
import PropTypes from 'prop-types';

import { Link } from '../link';

// TODO: Auto truncate not only last item
const FeatList = ({ className, artists = [] }) => {
    // if (!artists) {
    //     throw new Error('Artists list should not be empty');
    // }

    return (
        <>
            {artists.map(({ name, id }, i) => (
                <Link
                    key={id}
                    className={cx(
                        `feat-item inline-block relative text-secondary hover:text-secondary-hover align-bottom ${className}`,
                        i === artists.length - 1 ? 'truncate' : 'shrink-0'
                    )}
                    href={`/artist/${id}`}
                >
                    {name}
                </Link>
            ))}
        </>
    );
};

FeatList.propTypes = {
    artists: PropTypes.array.isRequired,
    className: PropTypes.string
};

export { FeatList };
