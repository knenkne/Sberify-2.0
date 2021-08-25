import { useEmblaCarousel } from 'embla-carousel/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import { ArtistStyled, CoverWrapperStyled, InfoStyled, LinkStyled, NameStyled } from './style';

const shimmer = () =>
    `<?xml version="1.0" encoding="UTF-8"?>
    <svg aria-labelledby="loading-aria" preserveAspectRatio="none" role="img" viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg">
    <title>Loading...</title>
    <rect width="100%" height="100%" clip-path="url(#b)" fill="url(#a)"/>
    <defs>
    <clipPath id="b">
    <rect x="71" y="79" width="1" height="7" rx="0" ry="0"/>
    <rect width="140" height="140" rx="0" ry="0"/>
    </clipPath>
    <linearGradient id="a">
    <stop stop-color="#111" offset=".59996">
    <animate attributeName="offset" dur="1s" keyTimes="0; 0.25; 1" repeatCount="indefinite" values="-2; -2; 1"/>
    </stop>
    <stop stop-color="#222" offset="1.6">
    <animate attributeName="offset" dur="1s" keyTimes="0; 0.25; 1" repeatCount="indefinite" values="-1; -1; 2"/>
    </stop>
    <stop stop-color="#111" offset="2.6">
    <animate attributeName="offset" dur="1s" keyTimes="0; 0.25; 1" repeatCount="indefinite" values="0; 0; 3"/>
    </stop>
    </linearGradient>
    </defs>
    </svg>`.trim();

const toBase64 = (str) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const Releases = ({ releases }) => {
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        align: 'start',
        containScroll: 'keepSnaps'
    });

    return (
        // TODO: styled semantic components w/ className
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {releases.map(({ id, name, images, artists, album_type }) => {
                    const coverUrl = images[0].url;
                    const artist = artists[0].name;

                    return (
                        <div className="embla__slide" key={id}>
                            <NextLink href={`/album/${id}`} passHref>
                                <LinkStyled single={album_type === 'single'}>
                                    {/* TODO: placeholder */}
                                    {/* TODO: semantic */}
                                    {/* TODO: loader for matching sizes automaticly */}
                                    <CoverWrapperStyled>
                                        <NextImage
                                            src={coverUrl}
                                            alt={`${name} by ${artist}`}
                                            layout="fixed"
                                            width="140"
                                            height="140"
                                            placeholder="blur"
                                            blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                                shimmer(140, 140)
                                            )}`}
                                            unoptimized
                                        />
                                    </CoverWrapperStyled>
                                    <InfoStyled>
                                        <NameStyled>{name}</NameStyled>
                                        <ArtistStyled>{artist}</ArtistStyled>
                                    </InfoStyled>
                                </LinkStyled>
                            </NextLink>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

Releases.propTypes = {
    releases: PropTypes.array
};

export default Releases;
