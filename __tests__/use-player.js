import 'react-test-renderer';

import { act, renderHook } from '@testing-library/react-hooks';

import { usePlayer } from '../components/player/use-player-2';
import { DEFAULT_TRACK_DURATION } from '../shared/constants';

const src =
    'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music49/v4/91/59/fd/9159fd07-463a-bcab-c411-8ae26d9ba2f5/mzaf_6817715306190044291.plus.aac.p.m4a';

describe('usePlayer', () => {
    it('initializes', () => {
        const { result } = renderHook(() => usePlayer(src));

        expect(result.current.state.audio).toBeInstanceOf(HTMLAudioElement);
        expect(result.current.state.audio.src).toBe(src);
    });

    it('toggles play state', () => {
        const { result } = renderHook(() => usePlayer(src));

        // Default
        expect(result.current.state.isPlaying).toBe(false);

        // Play
        act(() => result.current.controls.toggle());
        expect(result.current.state.isPlaying).toBe(true);

        // Pause
        act(() => result.current.controls.toggle());
        expect(result.current.state.isPlaying).toBe(false);
    });

    it('rewinds', () => {
        const { result } = renderHook(() => usePlayer(src));

        // Default
        expect(result.current.state.time).toBe(0);

        act(() => result.current.controls.rewind(5));
        expect(result.current.state.time).toBe(5);

        // Negative input
        act(() => result.current.controls.rewind(-Infinity));
        expect(result.current.state.time).toBe(0);

        // Positive - more than DEFAULT_TRACK_DURATION
        act(() => result.current.controls.rewind(Infinity));
        expect(result.current.state.time).toBe(DEFAULT_TRACK_DURATION);
    });
});
