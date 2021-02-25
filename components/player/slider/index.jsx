import { useCallback, useState } from "react"
import { InputStyled, ThumbStyled, SliderStyled } from "./styles"

const Slider = ({ onChange }) => {
  const [percent, setPercent] = useState(0)

  const handleSliderChange = useCallback(({ target }) => {
    const { value } = target

    onChange(value)
    setPercent(value)
  }, [onChange])

  return (
    <SliderStyled percent={percent}>
      <ThumbStyled percent={percent} />
      <InputStyled
        type="range"
        step="1"
        onChange={handleSliderChange}
        defaultValue={0}
      />
    </SliderStyled>
  )
}

export default Slider
