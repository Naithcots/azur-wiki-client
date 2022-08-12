import { useEffect, useState } from "react";
import nations from "../../temp/data/nations";
import NationIcon from "./NationIcon";
import { Container, StyledNations } from "./styles";

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
