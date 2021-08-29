import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useStore = create(
    devtools((set) => ({
        currentTrack: null,
        paused: true,
        setCurrentTrack: (track) => set(() => ({ currentTrack: track })),
        play: () => set(() => ({ paused: false })),
        pause: () => set(() => ({ paused: true }))
    }))
);
