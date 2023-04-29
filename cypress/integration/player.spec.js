import { DEFAULT_TRACK_DURATION, Route } from '../../shared/constants';

describe('Player', () => {
    const getAudio = () => cy.get('aside header audio');
    const getRewindInput = () => cy.get('aside header input');
    const getPlayButton = () => cy.get('aside header button').eq(0);
    const getShuffleButton = () => cy.get('aside header button').eq(1);
    const getLoopButton = () => cy.get('aside header button').eq(2);

    it('should play audio', () => {
        cy.visit(Route.DISCOVER);

        getAudio().should('have.prop', 'paused', true).and('have.prop', 'currentTime', 0);
        getPlayButton().find('svg').should('have.attr', 'data-id', 'play-icon');

        getPlayButton().click();

        getAudio().should('have.prop', 'paused', false).and('not.have.prop', 'currentTime', 0);
        getPlayButton().find('svg').should('have.attr', 'data-id', 'pause-icon');

        cy.get('body').trigger('keydown', { code: 'Space' });
        cy.get('body').trigger('keyup', { code: 'Space' });

        getAudio().should('have.prop', 'paused', true);
        getPlayButton().find('svg').should('have.attr', 'data-id', 'play-icon');

        cy.get('body').trigger('keydown', { code: 'Space' });
        cy.get('body').trigger('keyup', { code: 'Space' });

        getAudio().should('have.prop', 'paused', false);
        getPlayButton().find('svg').should('have.attr', 'data-id', 'pause-icon');
    });

    it('should rewind audio', () => {
        getRewindInput()
            .trigger('focus')
            .trigger('keydown', { code: 'ArrowRight', release: false })
            .trigger('keydown', { code: 'ArrowRight', release: false })
            .trigger('keydown', { code: 'ArrowRight', release: false })
            .trigger('keydown', { code: 'ArrowRight', release: false })
            .trigger('keydown', { code: 'ArrowRight', release: false })
            .trigger('keydown', { code: 'ArrowRight', release: false })
            .trigger('keydown', { code: 'ArrowRight', release: false })
            .trigger('keydown', { code: 'ArrowRight', release: false });

        getAudio()
            .invoke('prop', 'currentTime')
            .should(
                'satisfy',
                (currentTime) => Math.round(currentTime) === DEFAULT_TRACK_DURATION / 2
            );

        getRewindInput().trigger('focus').trigger('keydown', { code: 'ArrowLeft', release: false });

        getAudio()
            .invoke('prop', 'currentTime')
            .should(
                'satisfy',
                (currentTime) => Math.round(currentTime) === DEFAULT_TRACK_DURATION / 2
            );
    });

    it('should autoplay next audio', () => {
        getAudio()
            .invoke('attr', 'src')
            .then((prevSrc) => {
                getAudio()
                    .invoke({ timeout: (DEFAULT_TRACK_DURATION / 2) * 1000 }, 'prop', 'currentTime')
                    .should(
                        'satisfy',
                        (currentTime) => Math.round(currentTime) === DEFAULT_TRACK_DURATION
                    );

                getAudio()
                    .should('have.prop', 'paused', false)
                    .should('not.have.attr', 'src', prevSrc)
                    .invoke('prop', 'currentTime')
                    .should('satisfy', (currentTime) => Math.floor(currentTime) === 0);
            });
    });

    it('should loop audio', () => {
        getAudio()
            .invoke('attr', 'src')
            .then((prevSrc) => {
                getLoopButton()
                    .should('have.class', 'text-secondary')
                    .click()
                    .should('have.class', 'text-primary');

                getRewindInput().invoke('val', 100).trigger('input');

                getAudio()
                    .should('have.prop', 'paused', false)
                    .and('have.attr', 'src', prevSrc)
                    .invoke('prop', 'currentTime')
                    .should('satisfy', (currentTime) => Math.floor(currentTime) === 0);

                getLoopButton().click().should('have.class', 'text-secondary');
            });
    });
});
