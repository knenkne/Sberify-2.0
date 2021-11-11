import { Route } from '../../shared/constants';

describe('Navigation', () => {
    it('Should navigate to the pages with correct text and styles', () => {
        // Start from the index page
        cy.visit(Route.DISCOVER);

        for (const route in Route) {
            cy.get(`a[href="${Route[route]}"]`)
                .should('have.text', route)
                .click()
                // Should have active styles
                .should('have.css', 'font-weight', '500');

            cy.url().should('include', Route[route]);
        }
    });
});
