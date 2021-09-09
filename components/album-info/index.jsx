/* eslint-disable react/prop-types */
import NextImage from 'next/image';
import NextLink from 'next/link';

import Tracks from '../tracks';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const AlbumInfo = (props) => {
    // TODO: parse on backend
    const { release_date } = props;
    const releseDateParsed = new Date(release_date);
    const releaseYear = releseDateParsed.getUTCFullYear();
    const releaseMonth = months[releseDateParsed.getUTCMonth()];

    return (
        <section>
            <div className="pt-24 px-10 pb-10 bg-secondary">
                <div className="flex items-end">
                    <div className="relative w-1/5 h-1/5 flex-shrink-0 rounded-lg overflow-hidden mr-5 shimmer light:shimmer-light">
                        <NextImage
                            src={props.images[1].url}
                            // TODO: alt
                            // alt={`${props.name} by ${props.artist}`}
                            layout="responsive"
                            width="300"
                            height="300"
                            unoptimized
                        />
                    </div>
                    <div className="relative min-w-0 flex-grow">
                        <h3 className="w-full truncate font-archivo font-black text-7xl text-primary">
                            {props.name}
                        </h3>
                        <h4 className="font-medium text-base text-secondary ml-1 -mt-2">
                            {props.artists.map(({ name, id }) => (
                                <>
                                    <NextLink href={`/artist/${id}`} passHref key={id}>
                                        <a className="text-secondary duration-300 hover:text-secondary-hover hover:text-shadow">
                                            {name}
                                        </a>
                                    </NextLink>
                                    {` • `}
                                </>
                            ))}
                            {releaseMonth} {releaseYear}
                        </h4>
                    </div>
                </div>
            </div>
            <Tracks tracks={props.tracks} image={props.images[1].url} />
        </section>
    );
};

export default AlbumInfo;
