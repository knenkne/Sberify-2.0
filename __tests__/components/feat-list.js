import '@testing-library/jest-dom';

import { cleanup, render, screen } from '@testing-library/react';

import { FeatList } from '../../components/common/feat-list';

const artists = [
    {
        name: 'Max',
        id: '1'
    },
    {
        name: 'Leo',
        id: '2'
    },
    {
        name: 'Lil Derek',
        id: '3'
    }
];

describe('FeatList', () => {
    afterEach(cleanup);

    it('initializes', () => {
        expect(FeatList).toBeDefined();
    });

    // TODO: skeleton
    // it('does not render without children', () => {
    //     expect(() => render(<FeatList />)).toThrow('Artists list should not be empty');
    // });

    it('renders with correct links', () => {
        const featList = render(<FeatList artists={artists} />);
        const { children } = featList.container;

        expect(children.length).toBe(artists.length);

        for (const artist of artists) {
            expect(screen.getByText(artist.name).href).toMatch(artist.id);
        }
    });
});
