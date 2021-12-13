/* eslint-disable react/prop-types */
import { cleanName, humanizeDate } from '../../shared/utils';
import { Cover } from '../common/cover';
import { FeatList } from '../common/feat-list';
import Tracks from '../tracks';

const AlbumInfo = (props) => {
    return (
        <>
            <div className="bg-secondary pb-12 shadow-md z-10 col-start-1 col-end-3 row-start-2 row-end-3 pl-96 pr-10 min-w-0">
                <div className="flex items-end ml-10">
                    <Cover
                        src={props.images[1].url}
                        alt={`${props.name} by ${props.artists[0].name}`}
                        className="shadow-lg w-72 h-72 flex-shrink-0 rounded-lg mr-5"
                    />
                    <div className="relative flex-grow min-w-0">
                        <h3
                            className="w-full truncate font-archivo font-black text-7xl text-primary"
                            title={props.name}
                        >
                            {cleanName(props.name)}
                        </h3>
                        <h4 className="flex font-opensans font-semibold text-base text-secondary leading-none whitespace-pre">
                            <FeatList artists={props.artists} />
                            {` • `}
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
