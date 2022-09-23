import styled, { keyframes } from "styled-components";
import { CgSpinnerTwoAlt } from "react-icons/cg";

export const StyledSearch = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  position: relative;
  padding: 1.25em 1.5em;

  color: #fff;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const Label = styled.label`
  padding: 0 0.25em;

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0.75em;
  z-index: 100;

  color: #999;
  background-color: #000;

  transition: transform 200ms;
`;

export const Input = styled.input`
  width: 65%;

  padding: 0.75em 0.5em;

  color: #fff;
  background: none;
  border: 2px solid #fff;
  border-radius: 0.25em;
  outline: none;

  &:not(:placeholder-shown) ~ ${Label}, &:focus ~ ${Label} {
    transform: translateY(-165%);
  }
`;

export const ResultsContainer = styled.div`
  padding: 0.5em;
  height: 100%;
  overflow-y: auto;

  @media (min-width: 876px) {
    margin: 0 1em;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));
    gap: 1em;
  }
`;

export const Result = styled.div`
  width: 100%;
  height: 70px;

  padding: 0.25em 0;

  display: flex;
  align-items: center;

  border-bottom: 1px solid gray;

  cursor: pointer;

  transition: transform 250ms;

  &:hover {
    transform: scale(0.98);

    p {
      text-decoration: underline;
    }
  }

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 876px) {
    width: auto;
    height: auto;

    border-bottom: none;
    background-color: #44444490;

    flex-direction: column;

    border-radius: 0.25em;
  }
`;

export const Thumbnail = styled.img`
  width: auto;
  height: 100%;

  @media (min-width: 876px) {
    width: auto;
    height: 80px;
  }
`;

export const Code = styled.p`
  color: #fff;
  margin: 0 1.25em;

  font-size: clamp(1rem, 5vw, 1.2rem);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 876px) {
    margin: 0.5em 0;
  }
`;

const SpinnerAnim = keyframes`
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

export const Spinner = styled(CgSpinnerTwoAlt)`
  margin: 0.5em auto;

  display: block;

  color: #fff;
  font-size: 2.5rem;

  animation: ${SpinnerAnim} 3000ms linear infinite;
`;
