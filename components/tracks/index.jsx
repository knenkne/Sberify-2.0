/* eslint-disable react/prop-types */

import PauseIcon from '../../public/icons/pause.svg';
import PlayIcon from '../../public/icons/play.svg';
import { cleanName } from '../../shared/utils';
import { FeatList } from '../common/feat-list';

const Track = (props) => {
    const { id, name, artists, image, previewUrl, playing, onClick } = props;
    const handlePlayButtonClick = () => {
        onClick({
            id,
            artist: artists[0].name,
            name,
            image,
            src: previewUrl
        });
    };

    return (
        <li
            className="
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
            "
        >
            {previewUrl && (
                <button
                    className="group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center w-14 h-14 bg-secondary opacity-0 cursor-pointer rounded"
                    onClick={handlePlayButtonClick}
                >
                    {!playing ? (
                        <PlayIcon className="w-4 h-4 fill-current text-primary" />
                    ) : (
                        <PauseIcon className="w-4 h-4 fill-current text-primary" />
                    )}
                </button>
            )}
            <div className="flex-grow">
                {/* TODO: common */}
                <h3 className="font-roboto font-medium text-primary leading-5 truncate">
                    {cleanName(name)}
                </h3>
                {/* TODO: common */}
                <FeatList artists={artists} className="font-roboto font-medium flex text-xs" />
            </div>
            {previewUrl && (
                <span className="flex h-14 w-14 items-center justify-center font-roboto text-md text-secondary">
                    0:30
                </span>
            )}
        </li>
    );
};

const Tracks = ({ tracks, image }) => {
    return (
        <ol className="pt-10 px-10 list-decimal list-inside text-purple-800">
            {tracks.map((track, i) => (
                <Track
                    key={track.id}
                    // TODO: counter pseudo
                    i={i}
                    // playing={currentTrack?.id === track.id && !paused}
                    // onClick={handlePlayButtonClick}
                    image={image}
                    {...track}
                />
            ))}
        </ol>
    );
};
export default Tracks;
