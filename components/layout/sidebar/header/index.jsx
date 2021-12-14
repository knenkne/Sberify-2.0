/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCallback, useMemo } from 'react';

import { Slider } from '../../../common/slider';
import { withIndependentSlide } from '../../../common/slider/hoc';
import { usePlayer } from '../../../player/use-player-2';
import { SidebarItem } from '../item';

const SidebarHeader = ({ track }) => {
    const { audio, state, controls } = usePlayer(
        'https://p.scdn.co/mp3-preview/08ee0b47896a05fd298e91377b60f4af095c4d1f?cid=169f7aea4c204f00ba96ece98b15e24d'
    );

    const value = (state.time / audio?.duration) * 100 || 0;

    const handleClick = () => {
        controls.toggle();
    };

    const handleChange = useCallback(
        (value) => {
            controls.rewind((value / 100) * audio.duration);
        },
        [controls, audio]
    );

    const WithIndependentSlide = useMemo(() => withIndependentSlide(Slider), []);

    return (
        <header className="relative w-72 rounded-t-lg mb-4 flex-shrink-0 shadow-sidebar bg-primary">
            <SidebarItem {...track} />
            <WithIndependentSlide value={value} onChange={handleChange} />
            <button onClick={handleClick} className="fixed top-10 left-10">
                Play
            </button>
        </header>
    );
};

export { SidebarHeader };
