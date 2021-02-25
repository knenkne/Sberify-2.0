import { useCallback, useState, useEffect } from "react"
import usePlayer from "./use-player"
import Slider from './slider'
import {
  WrapperStyled,
  PlayerStyled,
} from "./styles"

const Player = ({ artist, name, image, src }) => {
  const { element, state, controls } = usePlayer({ src })

  const { paused, time, duration } = state
  const { play, pause } = controls

  const handlePlayButtonClick = useCallback(() => {
    if (paused) {
      play()
    } else {
      pause()
    }
  }, [pause, play, pause])

  const handleSliderChange = useCallback((value) => {
  }, [])

  return (
    <WrapperStyled>
      <PlayerStyled>
        {element}
        <Slider onChange={handleSliderChange} />
        {/* <img src={image} alt={`${name} by ${artist}`} /> */}
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
