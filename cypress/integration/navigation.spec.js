import { Route } from '../../shared/constants';

describe('Navigation', () => {
    it('should navigate to the pages with correct text and styles', () => {
        cy.visit(Route.DISCOVER);

        for (const route in Route) {
            cy.contains(route).click();

            cy.url().should('include', Route[route]);

            cy.contains(route).should('have.css', 'font-weight', '500');
        }
    });
});
