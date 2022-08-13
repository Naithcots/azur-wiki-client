import styled from "styled-components";

const ShipPanel = styled.div`
  width: 100%;

  padding: 1.25em;

  position: relative;
  box-sizing: border-box;

  border-radius: 0.5em;

  color: #fff;
  background-color: #444;

  user-select: none;

  @media (min-width: 876px) {
    min-height: 70vh;
    max-height: 80vh;
  }
`;

export default ShipPanel;
