import styled from "styled-components";

export const StyledNations = styled.div`
  margin: 1.5em 2em;
  overflow: hidden;
  place-items: center;

  display: ${(props) => (props.show ? "grid" : "none")};
  /* Hide component after animation ends */

  @media (min-width: 876px) {
    margin: 0 2em;
    height: 100vh;
  }
`;

export const Container = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  grid-template-columns: repeat(2, 1fr);
  column-gap: 2em;
  row-gap: 2em;

  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* @media (min-width: 720px) {
    grid-template-columns: repeat(4, 1fr);
  } */

  @media (min-width: 876px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1210px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
