import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 0.75em 1em 0.5em;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 900;

  @media (min-width: 876px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ImageContainer = styled.div`
  width: 120px;
  height: 55px;
  position: relative;
`;
