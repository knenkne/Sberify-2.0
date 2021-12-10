import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Link } from '../../components/common/link';

const href = '#';
const text = 'text';

describe('Link', () => {
    it('initializes', () => {
        expect(Link).toBeDefined();
    });

    // TODO: href is required
    it('renders with correct href', () => {
        render(<Link href={href} />);

        expect(screen.getByRole('link').href).toMatch(href);
    });

    it('renders with correct text', () => {
        render(
            <Link href={href}>
                <span>{text}</span>
            </Link>
        );

        expect(screen.getByRole('link')).toHaveTextContent(text);
    });
});
