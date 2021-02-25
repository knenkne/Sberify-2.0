import { css } from "@emotion/core"
import styled from "@emotion/styled"

export const ThumbStyled = styled.div(
  ({ percent }) => css`
    position: absolute;
    width: 12px;
    height: 12px;
    z-index: 3;
    background-color: white;
    border-radius: 50%;
    top: calc(50% - 12px / 2);
    left: ${percent}%;
    margin-left: calc(12px / 100 * ${percent} * -1);
    pointer-events: none;
    user-select: none;
  `
)

export const SliderStyled = styled.div(({ percent }) => css`
  position: relative;

  &::before {
    content: "";
    background-color: white;
    width: calc(12px + 300px / 100 * ${percent} - (12px / 100 * ${percent}));
    height: 8px;
    position: absolute;
    border-radius: 10px;
    top: 0;
    left: 0;
    pointer-events: none;
    user-select: none;
  }
`)

export const InputStyled = styled.input`
  display: block;
  -webkit-appearance: none;
  background-color: rgba(0, 0, 0, 0.2);
  height: 8px;
  width: 100%;
  cursor: pointer;
  opacity: 1;
  margin: 0 auto;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`
