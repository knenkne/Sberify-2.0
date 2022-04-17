/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402
// TODO: dynamic
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import { cleanTitle } from '../../shared/utils';
import { Carousel } from '../common/carousel';
import { Cover } from '../common/cover';

const Releases = ({ onClick, releases }) => {
    return (
        <section
            // TODO: w-screen FF
            className={`                
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
        `.trim()}
        >
            <Carousel>
                {releases.map(({ id, name, images, artists }) => {
                    const [, { url }] = images;
                    const [{ name: artist }] = artists;

                    return (
                        <li
                            className="group flex-shrink-0 relative w-36 h-36 box-content pr-10"
                            key={id}
                        >
                            <NextLink href={`/album/${id}`} passHref>
                                <a onClick={onClick}>
                                    <Cover
                                        src={url}
                                        alt={`${name} by ${artist}`}
                                        className="w-36 h-36 rounded group-hover:-translate-y-10 group-focus-within:-translate-y-10 delay-75 trainsition-transform duration-300 shadow-md shadow-black/50 bg-secondary"
                                    />
                                </a>
                            </NextLink>
                            <div className="-mt-9">
                                <h3 className="font-roboto font-medium text-primary leading-5 truncate">
                                    {cleanTitle(name)}
                                </h3>
                                <h4 className="font-roboto font-medium text-secondary text-xs truncate">
                                    {artist}
                                </h4>
                            </div>
                        </li>
                    );
                })}
            </Carousel>
        </section>
    );
};

Releases.propTypes = {
    releases: PropTypes.array,
    onClick: PropTypes.func
};

export default Releases;
