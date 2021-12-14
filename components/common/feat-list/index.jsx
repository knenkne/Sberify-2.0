import PropTypes from 'prop-types';

import { Link } from '../link';

const FeatList = ({ artists = [], className = '' }) => {
    // if (!artists) {
    //     throw new Error('Artists list should not be empty');
    // }

    return (
        <ul className={`flex ${className}`.trim()}>
            {artists.map(({ name, id }) => (
                <li className="feat-item relative" key={id}>
                    <Link
                        className="text-secondary hover:text-secondary-hover"
                        href={`/artist/${id}`}
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    );
};

FeatList.propTypes = {
    artists: PropTypes.array.isRequired,
    className: PropTypes.string
};

export { FeatList };
