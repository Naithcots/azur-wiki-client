import { GrClose } from "react-icons/gr";
import styled from "styled-components";

export const StyledSkinModal = styled.div`
  width: 100%;
  height: 100vh;
  height: -moz-fill-available;
  height: fill-available;

  position: fixed;
  top: 0;
  left: 0;

  display: grid;
  place-items: center;

  z-index: 999;

  backdrop-filter: brightness(0.2) blur(0.1em);
`;

export const ImageContainer = styled.div`
  width: 85vw;
  height: 75vh;

  text-align: center;

  position: relative;
`;

export const CloseBtn = styled(GrClose)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;

  font-size: 3.5rem;

  cursor: pointer;

  & > path {
    stroke: #fff;
  }
`;
