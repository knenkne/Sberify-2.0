import PropTypes from 'prop-types';
import Link from 'next/link';

import {
    WrapperStyled,
    ReleasesStyled,
    ReleaseStyled,
    CoverStyled,
    NameStyled,
    ArtistStyled,
    LinkStyled,
    InfoStyled
} from './style';

const Releases = ({ releases }) => (
    <ReleasesStyled>
        {releases.map(({ id, name, images, artists, album_type }) => (
            <ReleaseStyled key={id}>
                <Link href={`/album/${id}`} passHref>
                    <LinkStyled single={album_type === 'single'}>
                        <CoverStyled src={images[0].url} alt="" />
                        <InfoStyled>
                            <NameStyled>{name}</NameStyled>
                            <ArtistStyled>{artists[0].name}</ArtistStyled>
                        </InfoStyled>
                    </LinkStyled>
                </Link>
            </ReleaseStyled>
        ))}
    </ReleasesStyled>
);

Releases.propTypes = {
    releases: PropTypes.array
};

export default Releases;
