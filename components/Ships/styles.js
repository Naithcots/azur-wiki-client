import styled, { keyframes } from "styled-components";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSkullCrossbones,
} from "react-icons/fa";

const SpinnerAnim = keyframes`
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

const ErrorIconAnim = keyframes`
  from {
    transform: rotateY(0);
  }

  25% {
    transform: rotateY(30deg);
  }

  75% {
    transform: rotateY(-30deg);
  }

  to {
    transform: rotateY(0);
  }

`;

export const Spinner = styled(CgSpinnerTwoAlt)`
  font-size: 4rem;

  animation: ${SpinnerAnim} 3000ms linear infinite;
`;

export const ErrorIcon = styled(FaSkullCrossbones)`
  font-size: 4rem;

  animation: ${ErrorIconAnim} 3000ms infinite;
`;

export const LeftArrow = styled(FaChevronLeft)`
  font-size: 2.5rem;
  cursor: pointer;

  position: fixed;
  bottom: 5vh;
  left: 10vw;

  @media (min-width: 676px) {
    top: 50%;
    left: 1vw;
  }
`;

export const RightArrow = styled(FaChevronRight)`
  font-size: 2.5rem;
  cursor: pointer;

  position: fixed;
  bottom: 5vh;
  right: 10vw;

  @media (min-width: 676px) {
    top: 50%;
    right: 1vw;
  }
`;

const ReturnButtonAnim = keyframes`
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const ReturnButton = styled.button`
  padding: 0.65em 1.5em;

  position: absolute;

  top: 0;
  right: 20vw;

  border-radius: 0 0 0.5em 0.5em;

  /* font-size: 1.25rem; */
  font-size: clamp(1.125rem, 4vw, 1.35rem);
  font-weight: 600;

  border: none;
  color: #fff;
  background-color: #111;

  cursor: pointer;

  z-index: 955;

  transition: transform 100ms;

  &:hover {
    transform: scale(1.05);
  }

  animation: ${ReturnButtonAnim} 500ms forwards;
`;
