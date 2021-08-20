import {
    AlbumWrapperStyled,
    CoverWrapperStyled,
    CoverStyled,
    AlbumInfoStyled,
    TitleStyled,
    SubtitleStyled
} from './styles';

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const AlbumInfo = (props) => {
    // TODO: parse on backend
    const { release_date } = props;
    const releseDateParsed = new Date(release_date);
    const releaseYear = releseDateParsed.getUTCFullYear();
    const releaseMonth = months[releseDateParsed.getUTCMonth()];

    return (
        <AlbumWrapperStyled>
            <CoverWrapperStyled>
                <CoverStyled src={props.images[0].url} alt={props.name} />
                <AlbumInfoStyled>
                    <TitleStyled>{props.name}</TitleStyled>
                    <SubtitleStyled>
                        {props.artists[0].name} • {releaseMonth} {releaseYear}
                    </SubtitleStyled>
                </AlbumInfoStyled>
            </CoverWrapperStyled>
        </AlbumWrapperStyled>
    );
};

export default AlbumInfo;
