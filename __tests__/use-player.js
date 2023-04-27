import { act, renderHook } from '@testing-library/react';

import { usePlayer } from '../components/player';
import { DEFAULT_TRACK_DURATION } from '../shared/constants';

const src =
    'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music49/v4/91/59/fd/9159fd07-463a-bcab-c411-8ae26d9ba2f5/mzaf_6817715306190044291.plus.aac.p.m4a';

describe('usePlayer', () => {
    it('initializes', () => {
        const { result } = renderHook(() => usePlayer(src));
        expect(Object.keys(result.current).length).toBe(2);
        expect(result.current.controls).toBeInstanceOf(Object);
        expect(result.current.state).toBeInstanceOf(Object);
    });

    it.each`
        value            | handler
        ${'isPlaying'}   | ${'togglePlay'}
        ${'isLooping'}   | ${'toggleLoop'}
        ${'isShuffling'} | ${'toggleShuffle'}
    `(`toggles $value state`, ({ value, handler }) => {
        const { result } = renderHook(() => usePlayer(src));

        expect(result.current.state[value]).toBe(false);

        act(() => result.current.controls[handler]());
        expect(result.current.state[value]).toBe(true);

        act(() => result.current.controls[handler]());
        expect(result.current.state[value]).toBe(false);
    });

    it('rewinds', () => {
        const { result } = renderHook(() => usePlayer(src));
        expect(result.current.state.time).toBe(0);

        // Positive input
        act(() => result.current.controls.rewind(5));
        expect(result.current.state.time).toBe(5);

        // Negative input
        act(() => result.current.controls.rewind(-Infinity));
        expect(result.current.state.time).toBe(0);

        // Positive and more than DEFAULT_TRACK_DURATION
        act(() => result.current.controls.rewind(Infinity));
        expect(result.current.state.time).toBe(DEFAULT_TRACK_DURATION);
    });

    it('plays next track', () => {
        const { result } = renderHook(() => usePlayer(src));
        expect(result.current.state.time).toBe(0);

        // Positive input
        act(() => result.current.controls.rewind(5));
        expect(result.current.state.time).toBe(5);

        // Negative input
        act(() => result.current.controls.rewind(-Infinity));
        expect(result.current.state.time).toBe(0);

        // Positive and more than DEFAULT_TRACK_DURATION
        act(() => result.current.controls.rewind(Infinity));
        expect(result.current.state.time).toBe(DEFAULT_TRACK_DURATION);
    });
});
