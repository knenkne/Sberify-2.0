import { useCallback } from "react"
import usePlayer from "./use-player"

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

  return (
    <article>
      {element}
      <button onClick={handlePlayButtonClick}>Play</button>
      <img src={image} alt={`${name} by ${artist}`} />
      <div>{name}</div>
      <div>{artist}</div>
      <span>
        {Math.round(time)} / {Math.round(duration)}
      </span>
    </article>
  )
}

export default Player
