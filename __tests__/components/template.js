import '@testing-library/jest-dom';

import { cleanup, render, screen } from '@testing-library/react';
import ReactDOMServer from 'react-dom/server';

import { Template } from '../../components/common/template';

const title = 'The title is something special!';
const subtitle = (
    <p>
        Subtitle with <span>span inside</span>
    </p>
);
const children = (
    <ul>
        <li>child 1</li>
        <li>child 2</li>
        <li>child 3</li>
    </ul>
);

describe('Template', () => {
    afterEach(cleanup);

    it('initializes', () => {
        expect(Template).toBeDefined();
    });

    it('renders with correct titles and children', () => {
        const template = render(
            <Template title={title} subtitle={subtitle}>
                {children}
            </Template>
        );

        // Title
        expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: title }).title).toBe(title);

        // Subtitle
        expect(screen.getByRole('heading', { level: 4 }).innerHTML).toBe(
            ReactDOMServer.renderToStaticMarkup(subtitle)
        );

        // Children
        expect(template.container.lastChild.innerHTML).toBe(
            ReactDOMServer.renderToStaticMarkup(children)
        );
    });
});
