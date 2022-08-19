import { useEffect, useState } from "react";
import useNation from "../../hooks/useNation";
import nations from "../../temp/data/nations";
import NationIcon from "./NationIcon";
import { Container, StyledNations } from "./styles";

const ShipNation = () => {
  const { nation } = useNation();
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
            animationDuration={animationDuration}
            key={data.id}
          />
        ))}
      </Container>
    </StyledNations>
  );
};
export default ShipNation;
