/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';

import Slider from '../../../player/slider';
import { usePlayer } from '../../../player/use-player-2';
import { SidebarItem } from '../item';

const SidebarHeader = ({ track }) => {
    const { audio, state, controls } = usePlayer(track.previewUrl);

    const handleClick = () => {
        controls.toggle();
    };

    const handleChange = (percent) => {
        controls.rewind((percent / 100) * audio.duration);
    };

    return (
        <header
            className="relative w-72 rounded-t-lg mb-4 flex-shrink-0 shadow-sidebar
                                bg-primary
                                "
        >
            {/* <div
                className="bg-white w-2 h-2 rounded-full absolute -bottom-1 left-4 z-10 transition-transform"
                style={{
                    left: (state.time / audio?.duration) * 100 + `%`
                }}
            /> */}
            <SidebarItem {...track} />
            <Slider percent={(state.time / audio?.duration) * 100} onChange={handleChange} />
            <button onClick={handleClick} className="fixed top-10 left-10">
                Play
            </button>
        </header>
    );
};

export { SidebarHeader };
