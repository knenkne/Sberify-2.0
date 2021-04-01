import Layout from "../components/layout"
import Wrapper from "../components/wrapper"
import Headline from "../components/headline"
import Button from "../components/button"
import Paragraph from "../components/paragraph"
import Player from "../components/player"

import { css, keyframes } from "@emotion/core"
import styled from "@emotion/styled"

const titles = ["Explore.", "Listen.", "Share."]

const PlayerStyled = styled.article`
display: flex;
justify-content: flex-end;
position: absolute;
  bottom: 20px;
  left: 10%;
  width: 260px;
  padding: 10px 15px;
  height: 60px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 2px rgba(38, 38, 38, 0.04), 0px 4px 8px rgba(38, 38, 38, 0.16);
`

const ButtonStyled = styled.button`
  display: block;
  height: 40px;
  width: 40px;
  padding: 0;
  border: 0;
  background-color: #272727;
  /* box-shadow: 0px 1px 2px rgba(18, 18, 18, 0.24), 0px 4px 8px rgba(18, 18, 18, 0.6); */
  border-radius: 4px;

  &:not(:last-of-type) {
    margin-right: 5px;
  }
`

const discStyle = ({ isPlaying }) => {
  if (!isPlaying) {
    return 
  }

  return css`
  width: 80px;
  height: 80px;
  top: -30px;
  box-shadow: 0px 1px 2px rgba(38, 38, 38, 0.04), 0px 8px 16px rgba(38, 38, 38, 0.16);
    /* transform: scale(1.1); */
  `
}

const DiscStyled = styled.img`
  display: block;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  transition: 0.4s;

`

const spin = keyframes`
 100% {
   transform: rotate(360deg)
 }
`

const DiscWrapperStyled = styled.div`
  position: absolute;
  left: 25px;
  top: -20px;
  width: 70px;
  height: 70px;
  transform-origin: center center;
  animation-name: ${spin};
  animation-duration: 6s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  overflow:hidden;
  transition: 0.3s;
  border-radius: 50%;
  &::after {
    content: '';
    position: absolute;
    background-color: #fff;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    top: calc(50% - 6px);
    left: calc(50% - 6px);
  }

  ${discStyle};
`


const Home = () => (
  <PlayerStyled>
    <DiscWrapperStyled isPlaying={true} >
      <DiscStyled src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515352_10461.jpg" />
    </DiscWrapperStyled>
    <ButtonStyled />
    <ButtonStyled />
    <ButtonStyled />
  </PlayerStyled>
  // <Layout title="Home">
  //   <Wrapper>
  //     {titles.map((title) => (
  //       <Headline key={title} title={title} />
  //     ))}
  //     <Button filled>Start Exploring</Button>
  //     <Button>Get a Demo</Button>
  //     <Paragraph>
  //       Sberify combines the best music experience with an obsessive focus on
  //       things you like.
  //       <br />
  //       It contains a lot of artists, albums, songs, lyrics & even more.
  //     </Paragraph>
  //   </Wrapper>
  //   <Wrapper>
  //     <Player
  //       artist="Enter Shikari"
  //       name="{ The Dreamer’s Hotel }"
  //       image="https://images.genius.com/45816096f1a4a1403d8d1ea3bb0aaea0.1000x1000x1.jpg"
  //       src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/d2/31/ef/d231ef51-40b6-4780-2835-b1063239d752/mzaf_17341567205560380620.plus.aac.p.m4a"
  //     />
  //   </Wrapper>
  // </Layout>
)

export default Home
