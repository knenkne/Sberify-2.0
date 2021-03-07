import PropTypes from 'prop-types';
import Link from 'next/link';

import {
    WrapperStyled,
    ReleasesStyled,
    ReleaseStyled,
    CoverStyled,
    NameStyled,
    ArtistStyled
} from './style';

const Releases = ({ releases }) => (
    <WrapperStyled>
        <ReleasesStyled>
            {releases.map(({ id, name, images, artists }) => (
                <Link href={`/album/${id}`} key={id}>
                    <ReleaseStyled>
                        <CoverStyled src={images[0].url} alt="" />
                        <NameStyled>{name}</NameStyled>
                        <ArtistStyled>{artists[0].name}</ArtistStyled>
                    </ReleaseStyled>
                </Link>
            ))}
        </ReleasesStyled>
    </WrapperStyled>
);

Releases.propTypes = {
    releases: PropTypes.array
};

export default Releases;
