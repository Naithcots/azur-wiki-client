import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 0.75em 1em 0em;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 950;

  @media (min-width: 876px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
