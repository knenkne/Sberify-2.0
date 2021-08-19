import Wrapper from '../wrapper';
import { AlbumStyled, BannerStyled, InfoStyled, TitleStyled } from './styles';

const Banner = () => (
    <Wrapper>
        <BannerStyled src="https://images.kerrangcdn.com/MGK-JonathanWeiner-2020-7.jpg?auto=compress&fit=crop&w=1200" />
        <InfoStyled>
            {/* <Button>Play</Button> */}
            {/* <Button>Follow</Button> */}
            {/* <TitleStyled>Tickets To My Downfall</TitleStyled> */}
            {/* <AlbumStyled src="https://i.redd.it/6zd4glull7q51.jpg" /> */}
        </InfoStyled>
    </Wrapper>
);

export default Banner;
