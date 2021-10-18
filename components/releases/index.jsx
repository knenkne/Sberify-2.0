/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402
import { useEmblaCarousel } from 'embla-carousel/react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import Cover from '../cover';

const Releases = ({ releases }) => {
    const [emblaRef, embla] = useEmblaCarousel({
        loop: false,
        align: 'start',
        containScroll: 'keepSnaps'
    });

    // tiny hack for preact to stop propogation while drag the carousel
    const handleClick = (e) => {
        if (!embla?.clickAllowed()) {
            e.preventDefault();
        }
    };

    return (
        // TODO: semantic components
        <section
            // TODO: w-screen FF
            className="                    
                relative
                h-56
                pl-96
                max-w-full
                after:absolute 
                after:-top-28
                after:left-0 
                after:w-full 
                after:h-28
                after:bg-gradient-to-t
                after:from-[var(--secondary-BG)] 
                after:to-transparent
                bg-secondary
                row-start-6
                row-end-7
                col-start-1
                col-end-3
        "
        >
            <div
                className="
                    embla 
                    h-full
                    overflow-hidden
                "
                ref={emblaRef}
            >
                <div className="embla__container flex items-center h-full ml-10">
                    {releases.map(({ id, name, images, artists }) => {
                        const [, { url }] = images;
                        const [{ name: artist }] = artists;

                        return (
                            <div
                                className="embla__slide group flex-shrink-0 relative w-36 h-36 box-content pr-10"
                                key={id}
                            >
                                <NextLink href={`/album/${id}`} passHref>
                                    <a onClick={handleClick}>
                                        <Cover
                                            src={url}
                                            alt={`${name} by ${artist}`}
                                            className="w-36 h-36 rounded group-hover:-translate-y-10 group-hover:shadow-lg group-focus-within:-translate-y-10 delay-75 duration-300 shadow-sidebar"
                                        />
                                    </a>
                                </NextLink>
                                <div className="-mt-9">
                                    <h3 className="font-roboto font-medium text-primary leading-5 truncate">
                                        {name}
                                    </h3>
                                    <h4 className="font-roboto font-medium text-secondary text-xs truncate">
                                        {artist}
                                    </h4>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

Releases.propTypes = {
    releases: PropTypes.array
};

export default Releases;
