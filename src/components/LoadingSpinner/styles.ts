import { Color } from "ui";
import styled from "styled-components";

export const Ring = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: transparent;
  border: 3px solid ${Color.Primary};
  border-radius: 50%;
  text-align: center;
  line-height: 150px;
  font-family: sans-serif;
  font-size: 20px;
  letter-spacing: 4px;
  color: ${Color.Primary};
  text-transform: uppercase;
  text-shadow: 0 0 10px ${Color.Primary};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  &:before {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    width: 100%;
    height: 100%;
    border: 3px solid transparent;
    border-top: 3px solid ${Color.Primary};
    border-right: 3px solid ${Color.Primary};
    border-radius: 50%;
    animation: animateC 2s linear infinite;
  }
`;
export const Element = styled.span`
  display: block;
  position: absolute;
  top: calc(50% - 2px);
  left: 50%;
  width: 50%;
  height: 4px;
  background: transparent;
  transform-origin: left;
  animation: animate 2s linear infinite;
  &:before {
    content: "";
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${Color.Primary};
    top: -6px;
    right: -8px;
    box-shadow: 0 0 20px ${Color.Primary};
  }
  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`;