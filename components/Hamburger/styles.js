import styled from "styled-components";

export const StyledHamburger = styled.div`
  width: 34px;
  height: 34px;

  display: grid;
  place-items: center;

  position: relative;

  overflow: hidden;

  cursor: pointer;

  z-index: 980;

  & > div {
    background-color: ${(props) => (props.open ? "#fff" : "#000")};
  }

  & > div:nth-child(1) {
    transform: ${(props) =>
      props.open ? "rotateZ(45deg) translate(8px, 8px)" : "rotate(0)"};
  }

  & > div:nth-child(2) {
    transform: ${(props) =>
      props.open ? "translate(-40px, 0)" : "translate(0, 0)"};
    opacity: ${(props) => (props.open ? "0" : "1")};
  }

  & > div:nth-child(3) {
    transform: ${(props) =>
      props.open ? "rotateZ(-45deg) translate(8px, -8px)" : "rotate(0)"};
  }
`;

export const Line = styled.div`
  width: 85%;
  height: 5px;

  border-radius: 1em;

  /* background-color: #000; */

  transition: transform 150ms, opacity 250ms;
`;
