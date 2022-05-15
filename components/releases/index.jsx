/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
// https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402
// TODO: dynamic
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import { cleanTitle, humanizeDate } from '../../shared/utils';
import { Carousel } from '../common/carousel';
import { Cover } from '../common/cover';
import { Typography } from '../common/typography';

// TODO: remove wrapped mode
const Releases = ({ releases, className = '', autoplay = false }) => {
    return (
        <section
            className={`
                ${className}
                w-full
                max-w-full
        `.trim()}
        >
            <Carousel autoplay={autoplay}>
                {releases.map(({ id, name, images, artists, release_date: releaseDate }) => {
                    const [, { url }] = images;
                    const [{ name: artist }] = artists;

                    return (
                        <li
                            className="group flex-shrink-0 relative w-36 box-content pr-10"
                            key={id}
                        >
                            <NextLink href={`/album/${id}`} passHref prefetch={false}>
                                <a>
                                    <Cover
                                        src={url}
                                        alt={`${name} by ${artist}`}
                                        className="w-36 h-36 rounded shadow-md shadow-black/50 bg-secondary"
                                    />
                                </a>
                            </NextLink>
                            <div className="mt-3">
                                <Typography className="text-primary leading-none truncate" as="h3">
                                    {cleanTitle(name)}
                                </Typography>
                                <Typography className="text-secondary" size="xs">
                                    {releaseDate ? humanizeDate(releaseDate) : artist}
                                </Typography>
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
    autoplay: PropTypes.bool
};

export default Releases;
