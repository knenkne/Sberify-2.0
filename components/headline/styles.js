import { keyframes } from '@emotion/core';
import styled from '@emotion/styled';

const pulseForeground1 = keyframes`
    0%,
    16.667%,
    100% {
        opacity: 1;
    }

    33.333%,
    83.333% {
        opacity: 0;
    }
`;

const pulseForeground2 = keyframes`
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
`;

const pulseForeground3 = keyframes`
  0%,
  50%,
  100% {
    opacity: 0;
  }

  66.667%,
  83.333% {
    opacity: 1;
  }
`;

const pulseBackground1 = keyframes`
    0%,
    16.667%,
    100% {
        opacity: 0;
    }

    33.333%,
    83.333% {
        opacity: 1;
    }
`;

const pulseBackground2 = keyframes`
    0%, 100% {
      opacity: 1;
    }

    33.333%,
    50% {
      opacity: 0;
    }

    16.667%,
    66.667% {
      opacity: 1;
    }
`;

const pulseBackground3 = keyframes`
  0%,
  50%,
  100% {
    opacity: 1;
  }

  66.667%,
  83.333% {
    opacity: 0;
  }
`;

export const HeadlineStyled = styled.h2`
    position: relative;
    width: 100%;
    font-size: 160px;
    line-height: 160px;
    font-weight: 400;
    text-transform: uppercase;
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
        animation-name: ${pulseForeground2};
        animation-duration: 8s;
        animation-iteration-count: infinite;
    }

    &:before {
        content: '${({ title }) => title}';
        position: absolute;
        display: block;
        width: 100%;
        text-align: center;
        color: #000;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 0;

        animation-name: ${pulseBackground2};
        animation-duration: 8s;
        animation-iteration-count: infinite;

        .dark-mode & {
            color: #fff;
        }
    }

    &:first-of-type {
        span {
            animation-name: ${pulseForeground1};
            background-image: linear-gradient(90deg, #007cf0, #00dfd8);
        }

        &:before {
            animation-name: ${pulseBackground1};
        }
    }

    &:last-of-type {
        margin-bottom: 64px;

        span {
            animation-name: ${pulseForeground3};
            background-image: linear-gradient(90deg, #ff4d4d, #f9cb28);
        }

        &:before {
            animation-name: ${pulseBackground3};
        }
    }
`;
