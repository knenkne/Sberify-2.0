import { useMemo, useCallback, useEffect, useState, useReducer } from "react"
import { InputStyled, ThumbStyled, SliderStyled } from "./styles"

const Slider = ({ onChange, percent: audioPercent }) => {
  const [percent, setPercent] = useState(audioPercent)
  const [isRewinding, setIsRewinding] = useState(false)

  useEffect(() => {
    if (!isRewinding) {
      setPercent(audioPercent)
    }
  }, [audioPercent])

  useEffect(() => {
    if (!isRewinding && audioPercent !== percent) {
      onChange(percent)
    }
  }, [isRewinding])

  const handleMouseDown = useCallback(() => {
    setIsRewinding(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsRewinding(false)
  }, [])

  const handleChange = useCallback(({ target }) => {
    const { value: percent } = target

    setPercent(percent)
  }, [])

  return (
    <SliderStyled percent={percent}>
      <ThumbStyled />
      <InputStyled
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        type="range"
        step="0.1"
        onChange={handleChange}
        value={percent}
      />
    </SliderStyled>
  )
}

export default Slider
