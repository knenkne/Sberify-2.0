import PropTypes from 'prop-types';

import { Link } from '../link';

// TODO: no link for first artist
const FeatList = ({ artists = [], className = '' }) => {
    // if (!artists) {
    //     throw new Error('Artists list should not be empty');
    // }

    return (
        <p className={`block truncate min-w-0 ${className}`.trim()}>
            {artists.map(({ name, id }) => (
                <Link
                    key={id}
                    className="feat-item inline-block relative text-secondary hover:text-secondary-hover"
                    href={`/artist/${id}`}
                >
                    {name}
                </Link>
            ))}
        </p>
    );
};

FeatList.propTypes = {
    artists: PropTypes.array.isRequired,
    className: PropTypes.string
};

export { FeatList };
