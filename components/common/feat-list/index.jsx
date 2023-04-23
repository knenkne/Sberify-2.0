import PropTypes from 'prop-types';

import { Link } from '../link';

// TODO: no link for first artist
const FeatList = ({ className, artists = [] }) => {
    // if (!artists) {
    //     throw new Error('Artists list should not be empty');
    // }

    return (
        <>
            {artists.map(({ name, id }) => (
                <Link
                    key={id}
                    className={`feat-item inline-block relative text-secondary hover:text-secondary-hover ${className}`}
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
