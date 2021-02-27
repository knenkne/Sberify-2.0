import { useMemo, useCallback, useEffect, useState, useReducer } from "react"
import { InputStyled, ThumbStyled, SliderStyled } from "./styles"

const getPercent = (time, duration) => ((time / duration) * 100).toFixed(1)

const Slider = ({ onChange, time, duration }) => {
  const [percent, setPercent] = useState(0)
  const [isRewinding, setIsRewinding] = useState(false)

  const nextPercent = getPercent(time, duration)

  useEffect(() => {
    if (!isRewinding) {
      setPercent(nextPercent)
    }
  }, [time, duration])

  useEffect(() => {
    if (!isRewinding && nextPercent !== percent) {
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
