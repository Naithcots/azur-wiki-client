import { useEffect, useState } from "react";
import styled from "styled-components";
import nations from "../temp/data/nations";
import NationIcon from "./NationIcon";

const ShipNation = ({ nation, setNation }) => {
  const [display, setDisplay] = useState(true);
  const animationDuration = 350;

  useEffect(() => {
    if (nation) {
      setTimeout(() => {
        setDisplay(false);
      }, animationDuration);
    } else setDisplay(true);
  }, [nation]);

  return (
    <StyledNations show={display}>
      <Container>
        {nations.map((data) => (
          <NationIcon
            data={data}
            nation={nation}
            setNation={setNation}
            animationDuration={animationDuration}
            key={data.id}
          />
        ))}
      </Container>
    </StyledNations>
  );
};
export default ShipNation;

const StyledNations = styled.div`
  height: 100vh;
  margin: 0 1em;
  overflow: hidden;
  place-items: center;

  display: ${(props) => (props.show ? "grid" : "none")};
  /* Hide component after animation ends */
`;

const Container = styled.div`
  display: grid;

  align-items: center;
  justify-content: center;

  grid-template-columns: repeat(6, 150px);
  column-gap: 4em;
  row-gap: 2em;
`;
