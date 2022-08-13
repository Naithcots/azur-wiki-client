import styled from "styled-components";

export const StyledNations = styled.div`
  margin: 0 2em 1em;
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

  grid-template-columns: repeat(2, minmax(80px, 125px));
  column-gap: 4em;
  row-gap: 2em;

  @media (min-width: 576px) {
    grid-template-columns: repeat(3, 120px);
  }

  @media (min-width: 676px) {
    grid-template-columns: repeat(4, minmax(95px, 125px));
  }

  @media (min-width: 876px) {
    grid-template-columns: repeat(5, minmax(100px, 120px));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, minmax(100px, 150px));
  }
`;
