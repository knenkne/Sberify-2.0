import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"

const pulse1 = keyframes`
    0%,
    16.667%,
    100% {
        opacity: 1;
    }

    33.333%,
    83.333% {
        opacity: 0;
    }
`

const pulse2 = keyframes`
    0%, 100% {
      opacity: 0;
    }

    33.333%,
    50% {
      opacity: 1;
    }

    16.667%,
    66.667% {
      opacity: 0;
    }
`

const pulse3 = keyframes`
  0%,
  50%,
  100% {
    opacity: 0;
  }

  66.667%,
  83.333% {
    opacity: 1;
  }
`

export const HeadlineStyled = styled.h2`
  position: relative;
  font-size: 160px;
  line-height: 160px;
  text-align: center;
  margin: 0;
  letter-spacing: -12.8px;

  span {
    z-index: 1;
    padding: 20px;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    background-image: linear-gradient(90deg, #7928ca, #ff0080);
    animation-name: ${pulse2};
    animation-duration: 8s;
    animation-iteration-count: infinite;
  }

  &:before {
    content: "${({ title }) => title}";
    position: absolute;
    display: block;
    width: 100%;
    text-align: center;
    color: #000;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 0;

    .dark-mode & {
      color: #fff;
    }
  }

  &:first-of-type {
    span {
      animation-name: ${pulse1};
      background-image: linear-gradient(90deg, #007cf0, #00dfd8);
    }
  }

  &:last-of-type {
    span {
      animation-name: ${pulse3};
      background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
    }
  }
`

export const BannerStyled = styled.div`
  padding: 130px 0;
`
