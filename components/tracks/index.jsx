/* eslint-disable react/prop-types */

import PauseIcon from '../../public/icons/pause.svg';
import PlayIcon from '../../public/icons/play.svg';
import { cleanTitle } from '../../shared/utils';
import { FeatList } from '../common/feat-list';
import { Typography } from '../common/typography';

const Tracks = ({ tracks, isLoading }) => {
    return (
        <ol className="w-full pt-6 px-10 list-decimal list-inside">
            {(isLoading ? new Array(5).fill('') : tracks).map((track) => (
                <li
                    key={track.id}
                    className={`
                        group 
                        relative
                        flex 
                        items-center
                        h-14
                        pl-14
                        rounded 
                        hover:bg-secondary 
                        before:absolute 
                        before:w-14 
                        before:h-14 
                        before:flex 
                        before:items-center 
                        before:justify-center
                        before:left-0
                        before:font-roboto
                        before:text-secondary
                    `.trim()}
                >
                    {track.preview_url && (
                        <button className="group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center w-14 h-14 bg-secondary opacity-0 cursor-pointer rounded">
                            {!track.playing ? (
                                <PlayIcon className="w-4 h-4 fill-current text-primary" />
                            ) : (
                                <PauseIcon className="w-4 h-4 fill-current text-primary" />
                            )}
                        </button>
                    )}
                    <div className="flex-grow">
                        <Typography className="leading-5" as="h3" isLoading={isLoading}>
                            {cleanTitle(track.name)}
                        </Typography>
                        <Typography size="xs" isLoading={isLoading}>
                            <FeatList
                                artists={track.artists}
                                className="font-roboto font-medium text-xs"
                            />
                        </Typography>
                    </div>
                    {track.preview_url && (
                        <span className="flex h-14 w-14 items-center justify-center font-roboto text-md text-secondary">
                            0:30
                        </span>
                    )}
                </li>
            ))}
        </ol>
    );
};
export default Tracks;
