import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useStore = create(
    devtools((set) => ({
        currentTrack: null,
        setCurrentTrack: (id) => set(() => ({ currentTrack: id }))
    }))
);
