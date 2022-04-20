/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402
// TODO: dynamic
import cx from 'classnames';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import { cleanTitle, humanizeDate } from '../../shared/utils';
import { Carousel } from '../common/carousel';
import { Cover } from '../common/cover';

// TODO: remove wrapped mode
const Releases = ({ releases, className = '', unwrapped = false, autoplay = false }) => {
    return (
        <section
            // TODO: w-screen FF
            className={`
                ${className}
                ${cx(unwrapped && 'h-56')}
                w-full
                max-w-full
                after:absolute 
                after:-top-28
                after:left-0 
                after:w-full 
                after:h-28
                after:bg-gradient-to-t
                after:to-transparent
                row-start-6
                row-end-7
                col-start-1
                col-end-3
        `.trim()}
        >
            <Carousel autoplay={autoplay}>
                {releases.map(({ id, name, images, artists, release_date: releaseDate }) => {
                    const [, { url }] = images;
                    const [{ name: artist }] = artists;

                    return (
                        <li
                            className={cx(
                                'group flex-shrink-0 relative w-36 box-content pr-10',
                                unwrapped && 'h-36'
                            )}
                            key={id}
                        >
                            <NextLink href={`/album/${id}`} passHref>
                                <a>
                                    <Cover
                                        src={url}
                                        alt={`${name} by ${artist}`}
                                        // TODO: margin-top (2)
                                        className={cx(
                                            'w-36 h-36 rounded shadow-md shadow-black/50 bg-secondary',
                                            unwrapped &&
                                                'group-hover:-translate-y-10 group-focus-within:-translate-y-10 delay-75 trainsition-transform duration-300'
                                        )}
                                    />
                                </a>
                            </NextLink>
                            <div className={cx(unwrapped ? '-mt-9' : 'mt-2')}>
                                <h3 className="font-roboto font-medium text-primary leading-5 truncate">
                                    {cleanTitle(name)}
                                </h3>
                                <h4 className="font-roboto font-medium text-secondary text-xs truncate">
                                    {/* TODO: common Typography common Headline */}
                                    {releaseDate ? humanizeDate(releaseDate) : artist}
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
    className: PropTypes.string,
    autoplay: PropTypes.bool,
    unwrapped: PropTypes.bool
};

export default Releases;
