import { useCallback, useState, useEffect } from "react"
import usePlayer from "./use-player"
import Slider from "./slider"
import {
  WrapperStyled,
  PlayerStyled,
  ImageStyled,
  InfoStyled,
  SongNameStyled,
  ArtistNameStyled,
  ControlsStyled,
  PlayButtonStyled,
  DurationStyled,
  TimeStyled,
} from "./styles"

const Player = ({ artist, name, image, src }) => {
  const { element, state, controls } = usePlayer({ src })

  const { paused, time, duration } = state
  const { play, pause, seek } = controls

  const handlePlayButtonClick = useCallback(() => {
    if (paused) {
      play()
    } else {
      pause()
    }
  }, [play, pause])

  const handleSliderChange = useCallback(
    (percent) => {
      const time = (percent * duration) / 100

      seek(time)

      // if (paused) {
      //   play()
      // }
      // onChange(value)
      // setPercent(value)
    },
    [seek]
  )

  return (
    <WrapperStyled>
      <PlayerStyled>
        {element}
        <ImageStyled src={image} alt={`${name} by ${artist}`} />
        <InfoStyled>
          <SongNameStyled>{name}</SongNameStyled>
          <ArtistNameStyled>{artist}</ArtistNameStyled>
        </InfoStyled>
        <Slider
          onChange={handleSliderChange}
          time={time}
          duration={duration}
        />
        <DurationStyled>
          <TimeStyled>0:{Math.round(time)}</TimeStyled>
          <TimeStyled>0:{Math.round(duration)}</TimeStyled>
        </DurationStyled>
        <ControlsStyled>
          <PlayButtonStyled onClick={handlePlayButtonClick} />
        </ControlsStyled>
        {/* <button onClick={handlePlayButtonClick}>Play</button> */}
        {/* <div>{name}</div> */}
        {/* <div>{artist}</div> */}
        {/* <span>
        {Math.round(time)} / {Math.round(duration)}
      </span> */}
      </PlayerStyled>
    </WrapperStyled>
  )
}

export default Player
