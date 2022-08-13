import styled from "styled-components";

const Container = styled.div`
  margin: 1.5em 0;
  width: 100%;

  display: grid;
  place-items: center;

  position: relative;

  @media (min-width: 876px) {
    margin: 0;
    height: 100vh;
  }
`;

export default Container;
