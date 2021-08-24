import { useEmblaCarousel } from 'embla-carousel/react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';

import { ArtistStyled, CoverStyled, InfoStyled, LinkStyled, NameStyled } from './style';

// const swiperParams = {
//     Swiper,
//     modules: [Autoplay],
//     ContainerEl: 'section',
//     WrapperEl: 'ul',
//     slidesPerView: 'auto',
//     autoplay: {
//         disableOnInteraction: false,
//         pauseOnMouseEnter: true
//     }
// };

const Releases = ({ releases }) => {
    const [emblaRef] = useEmblaCarousel({
        loop: false,
        align: 'start',
        containScroll: 'keepSnaps'
    });

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {releases.map(({ id, name, images, artists, album_type }) => {
                    const coverUrl = images[0].url;
                    const artist = artists[0].name;

                    return (
                        <div className="embla__slide" key={id}>
                            <NextLink href={`/album/${id}`} passHref>
                                <LinkStyled single={album_type === 'single'}>
                                    <CoverStyled src={coverUrl} alt={`${name} by ${artist}`} />
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
