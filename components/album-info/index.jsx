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
        <>
            <div className="bg-secondary px-10 pb-12 shadow-md z-10">
                <div className="flex items-end">
                    <div className="relative w-72 h-72 flex-shrink-0 rounded-lg shadow-md overflow-hidden mr-5">
                        <div className="absolute top-0 left-0 w-full h-full bg-primary animate-pulse" />
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
            <div className="bg-tertiary h-full pb-10">
                <Tracks tracks={props.tracks} image={props.images[1].url} />
            </div>
        </>
    );
};

export default AlbumInfo;
