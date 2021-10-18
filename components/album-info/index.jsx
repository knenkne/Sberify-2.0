/* eslint-disable react/prop-types */
import NextLink from 'next/link';

import { cleanName, humanizeDate } from '../../shared/utils';
import Cover from '../cover';
import Tracks from '../tracks';

const AlbumInfo = (props) => {
    return (
        <>
            <div className="bg-secondary pb-12 shadow-md z-10 col-start-2 col-end-3 row-start-2 row-end-3">
                <div className="flex items-end">
                    <Cover
                        src={props.images[1].url}
                        alt={`${props.name} by ${props.artist}`}
                        className="w-72 h-72 flex-shrink-0 rounded-lg mr-5"
                    />
                    <div className="relative min-w-0 flex-grow">
                        <h3
                            className="w-full truncate font-archivo font-black text-7xl text-primary"
                            title={props.name}
                        >
                            {cleanName(props.name)}
                        </h3>
                        <h4 className="relative font-medium text-base text-secondary leading-none ml-1">
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
                            {humanizeDate(props.releaseDate)}
                        </h4>
                    </div>
                </div>
            </div>
            <div className="bg-tertiary pb-10 col-span-full row-start-3 row-end-5 pl-96">
                <Tracks tracks={props.tracks} image={props.images[1].url} />
            </div>
        </>
    );
};

export default AlbumInfo;
