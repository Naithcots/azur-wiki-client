import styled from "styled-components";

export const Box = styled.div`
  text-align: center;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 600;

  color: ${({ error }) => error && "red"};
`;

export const MobileStyledShips = styled.div`
  padding: 0.5em;
  width: 100%;
`;

export const StyledShips = styled.div`
  margin: 0 4.25em;

  transform: ${({ transformValue }) =>
    `translate3d(0, ${transformValue}px, 0)`};
  transition: transform 250ms;
`;
