/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402
// TODO: dynamic
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import PropTypes from 'prop-types';
import { cloneElement } from 'react';

const emblaCarouselOptions = {
    loop: false,
    align: 'start',
    containScroll: 'keepSnaps',
    skipSnaps: true
};
const autoplayPluginOptions = { stopOnMouseEnter: true };

const Carousel = ({ autoplay = false, children }) => {
    const [emblaRef, embla] = useEmblaCarousel(
        emblaCarouselOptions,
        autoplay ? [Autoplay(autoplayPluginOptions)] : []
    );

    // tiny hack for preact to stop propogation while drag the carousel
    const handleClick = (e) => {
        if (!embla?.clickAllowed()) {
            e.preventDefault();
        }
    };

    return (
        <div className="embla h-full overflow-hidden" ref={emblaRef}>
            <ul className="embla__container flex items-center h-full ml-10">
                {children.map((child) =>
                    cloneElement(child, {
                        ...child.props,
                        className: `embla__slide ${child.props.className}`,
                        onClick: handleClick
                    })
                )}
            </ul>
        </div>
    );
};

Carousel.propTypes = {
    children: PropTypes.node,
    autoplay: PropTypes.bool
};

export { Carousel };
