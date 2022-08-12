import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import useBodyOverflow from "../../hooks/useBodyOverflow";
import ShipGeneral from "../ShipGeneral/ShipGeneral";
import ShipSkills from "../ShipSkills/ShipSkills";
import ShipSkins from "../ShipSkins/ShipSkins";
import useScrollWheel from "../../hooks/useScrollWheel";
import useShips from "../../hooks/useShips";
import Container from "../../styles/shared/Container";
import {
  Box,
  Spinner,
  Text,
  ErrorIcon,
  StyledShips,
  LeftArrow,
  RightArrow,
  ReturnButton,
} from "./styles";

const Ships = ({ nation, setNation }) => {
  const { loading, error, ship, prevShip, nextShip } = useShips(nation);
  const { setOverflow } = useBodyOverflow();
  const [transformValue, setPanelInput] = useScrollWheel();

  // const isDesktop = useMediaQuery({
  //   query: "(min-width: 1024px)",
  // });

  useEffect(() => {
    nation ? setOverflow("hidden") : setOverflow("visible");
  }, [nation]);

  if (error)
    return (
      <Container>
        <Box>
          <ErrorIcon />
          <Text error>An error ocurred. Please try again later..</Text>
        </Box>
      </Container>
    );

  if (loading)
    return (
      <Container>
        <Box>
          <Spinner />
          <Text>Loading...</Text>
        </Box>
      </Container>
    );

  return (
    <>
      <StyledShips transformValue={transformValue}>
        {ship && <ShipGeneral ship={ship} setPanelInput={setPanelInput} />}
        {ship && <ShipSkills ship={ship} setPanelInput={setPanelInput} />}
        {ship && <ShipSkins ship={ship} />}
      </StyledShips>

      <LeftArrow onClick={prevShip} />
      <RightArrow onClick={nextShip} />
      <ReturnButton onClick={() => setNation(null)}>RETURN</ReturnButton>
    </>
  );
};
export default Ships;
