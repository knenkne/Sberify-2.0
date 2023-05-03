import { Route } from '../../shared/constants';

describe('Sidebar', () => {
    const getSidebar = () => cy.get('aside ul');

    it('should drag and drop items', () => {
        cy.visit(Route.DISCOVER);
        getSidebar()
            .children()
            .then((sidebarItems) => {
                const firstSidebarItem = sidebarItems.eq(0);
                const secondSidebarItem = sidebarItems.eq(1);
                const sidebarItemRect = firstSidebarItem.get(0).getBoundingClientRect();

                const button = firstSidebarItem.find('button');
                const buttonRect = button.get(0).getBoundingClientRect();

                cy.wrap(button)
                    .trigger('mousedown')
                    .trigger('mousemove', {
                        clientX: buttonRect.left,
                        // Move exactly one SidebarItem down
                        clientY: buttonRect.top + buttonRect.height / 2 + sidebarItemRect.height
                    })
                    .trigger('mouseup');

                getSidebar()
                    .children()
                    .then((orderedSidebarItems) => {
                        const firstOrderedSidebarItem = orderedSidebarItems.eq(0);
                        const secondOrderedSidebarItem = orderedSidebarItems.eq(1);

                        cy.wrap(firstOrderedSidebarItem.get(0)).should(
                            'be.equal',
                            secondSidebarItem.get(0)
                        );
                        cy.wrap(secondOrderedSidebarItem.get(0)).should(
                            'be.equal',
                            firstSidebarItem.get(0)
                        );
                    });
            });
    });
});
