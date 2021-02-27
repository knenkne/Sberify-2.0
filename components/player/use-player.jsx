import React, { useEffect, useRef, useState } from "react"

const usePlayer = ({ src }) => {
  const ref = useRef(null)
  // TODO: useReducer
  const [state, setOrgState] = useState({
    time: 0,
    duration: 30,
    paused: true,
  })

  const setState = (partState) => setOrgState({ ...state, ...partState })

  const element = React.createElement("audio", {
    src,
    controls: false,
    ref,
    onPlay: () => setState({ paused: false }),
    onPause: () => setState({ paused: true }),
    onTimeUpdate: () => {
      const audio = ref.current
      const { currentTime: time } = audio

      if (!audio) {
        return
      }

      setState({ time })
    },
    onEnded: () => {
      setState({ time: 0 })
    }
  })

  const controls = {
    play: () => {
      const audio = ref.current

      if (!audio) {
        return
      }

      audio.play()
    },
    pause: () => {
      const audio = ref.current

      if (!audio) {
        return
      }

      audio.pause()
    },
    seek: (time) => {
      const audio = ref.current

      if (!audio || state.duration === undefined) {
        return
      }

      time = Math.min(state.duration, Math.max(0, time))
      audio.currentTime = time || 0
    },
  }

  useEffect(() => {
    const audio = ref.current
    audio.volume = 0.025
  }, [src])

  return { element, state, controls }
}

export default usePlayer
