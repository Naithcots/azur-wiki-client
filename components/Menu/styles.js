import styled from "styled-components";

export const StyledMenu = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(100%)")};
  backdrop-filter: ${(props) =>
    props.open ? "brightness(0.05)" : "brightness(1)"};

  z-index: 930;

  transition: backdrop-filter 200ms;

  @media (min-width: 876px) {
    padding-top: 4.5em;
  }

  transition: padding-top 150ms;
`;

export const LinksContainer = styled.div``;
