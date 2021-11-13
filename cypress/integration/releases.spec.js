import { RELEASES_COUNT, Route } from '../../shared/constants';

describe('Releases', () => {
    it('should exist', () => {
        // Start from the index page
        cy.visit(Route.DISCOVER);

        cy.get(`a[href^="${Route.ALBUMS}/"]`).should('have.length', RELEASES_COUNT);
    });

    it('should twist on focus with image loading', () => {
        cy.get(`a[href^="${Route.ALBUMS}/"]`).each((link) => {
            cy.wrap(link).focus().find('img').should('be.visible');
        });
    });

    it('should redirect to ceratin release', () => {
        cy.get(`a[href^="${Route.ALBUMS}/"]`).each((link) => {
            const title = link.parent().find('h3').text();
            const artist = link.parent().find('h4').text();

            cy.visit(link.attr('href'));
            cy.url().should('include', link.attr('href'));

            cy.get('h3').first().should('have.text', title);
            cy.get('h4').first().should('include.text', artist);
        });
    });
});
