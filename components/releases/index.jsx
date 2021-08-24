import { useEmblaCarousel } from 'embla-carousel/react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import { ArtistStyled, CoverStyled, InfoStyled, LinkStyled, NameStyled } from './style';

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
                    const coverUrl = images[1].url;
                    const artist = artists[0].name;

                    return (
                        <div className="embla__slide" key={id}>
                            <NextLink href={`/album/${id}`} passHref>
                                <LinkStyled single={album_type === 'single'}>
                                    {/* TODO: placeholder */}
                                    {/* <Image
                                        src={coverUrl}
                                        alt={`${name} by ${artist}`}
                                        loader={Loader}
                                        layout="fill"
                                    /> */}
                                    <CoverStyled
                                        src={coverUrl}
                                        alt={`${name} by ${artist}`}
                                        width="140"
                                        height="140"
                                    />
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
