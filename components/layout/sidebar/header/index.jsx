/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useMemo } from 'react';

// import Slider from '../../../common/slider';
import { Slider } from '../../../common/slider';
import withTime from '../../../player/slider/hoc/with-time';
import { usePlayer } from '../../../player/use-player-2';
import { SidebarItem } from '../item';

const SidebarHeader = ({ track }) => {
    const { audio, state, controls } = usePlayer(
        'https://p.scdn.co/mp3-preview/08ee0b47896a05fd298e91377b60f4af095c4d1f?cid=169f7aea4c204f00ba96ece98b15e24d'
    );

    const handleClick = () => {
        controls.toggle();
    };

    const handleChange = (percent) => {
        if (percent && percent !== 'NaN') {
            controls.rewind((percent / 100) * audio?.duration);
        }
    };

    const TimeSlider = useMemo(() => withTime(Slider), []);
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
            {/* <Slider percent={(state.time / audio?.duration) * 100} onChange={handleChange} /> */}
            <Slider value={(state.time / audio?.duration) * 100} onChange={handleChange} />
            {/* <TimeSlider time={state.time} duration={audio?.duration} onChange={handleChange} /> */}
            <button onClick={handleClick} className="fixed top-10 left-10">
                Play
            </button>
        </header>
    );
};

export { SidebarHeader };
