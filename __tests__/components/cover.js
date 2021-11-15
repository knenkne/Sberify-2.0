import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';

import { Cover } from '../../components/common/cover';

const LOADING_TIMEOUT = 1000;
const src = 'https://i.scdn.co/image/ab67616d00001e02c5663e50de353981ed2b1a37';
const alt = 'text';
const className = 'w-full';

jest.mock('next/image', () => ({ src, alt, onLoadingComplete }) => {
    setTimeout(() => {
        onLoadingComplete();
    }, 1000);

    return <img src={src} alt={alt} />;
});

describe('Cover', () => {
    it('initializes', () => {
        expect(Cover).toBeDefined();
    });

    it('renders with correct attributes', () => {
        const cover = render(<Cover src={src} alt={alt} className={className} />);

        const image = screen.getByRole('img');

        expect(image.src).toBe(src);
        expect(image.alt).toBe(alt);
        expect(cover.container.firstChild).toHaveClass(className);
    });

    it('renders with shimmer', async () => {
        const cover = render(<Cover src={src} alt={alt} className={className} />);
        const { children } = cover.container.firstChild;

        expect(children.length).toBe(2);

        await waitFor(() => {
            expect(children.length).toBe(1);
        });
    });
});
