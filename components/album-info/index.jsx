import { AlbumWrapperStyled, CoverStyled } from './styles';

const AlbumInfo = (props) => (
    <AlbumWrapperStyled>
        {console.log(props)}
        <CoverStyled src={props.images[0].url} alt={props.name} />
    </AlbumWrapperStyled>
);

export default AlbumInfo;
