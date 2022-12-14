import { useMediaQuery } from "react-responsive";
import useNation from "../../hooks/useNation";
import ShipGeneral from "../ShipGeneral/ShipGeneral";
import ShipSkills from "../ShipSkills/ShipSkills";
import ShipSkins from "../ShipSkins/ShipSkins";
import useScrollWheel from "../../hooks/useScrollWheel";
import useShips from "../../hooks/useShips";
import Container from "../../styles/shared/Container";
import {
  Spinner,
  ErrorIcon,
  LeftArrow,
  RightArrow,
  // ReturnButton,
} from "./styles";
import {
  StyledShips,
  MobileStyledShips,
  Box,
  Text,
} from "../../styles/shared/Ship";

const Ships = () => {
  const { nation } = useNation();
  const [loading, error, ship, prevShip, nextShip] = useShips(nation);
  const { transformValue, next } = useScrollWheel();

  const isDesktop = useMediaQuery({
    query: "(min-width: 876px)",
  });

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

  if (!isDesktop)
    return (
      <>
        <MobileStyledShips>
          {ship && <ShipGeneral ship={ship} />}
          {ship && <ShipSkills ship={ship} />}
          {ship && <ShipSkins ship={ship} />}
        </MobileStyledShips>

        {/* <ReturnButton onClick={() => setNation(null)}>RETURN</ReturnButton> */}
      </>
    );

  return (
    <>
      <StyledShips transformValue={transformValue}>
        {ship && <ShipGeneral ship={ship} next={next} />}
        {ship && <ShipSkills ship={ship} next={next} />}
        {ship && <ShipSkins ship={ship} />}
      </StyledShips>

      <LeftArrow onClick={prevShip} />
      <RightArrow onClick={nextShip} />
      {/* <ReturnButton onClick={() => setNation(null)}>RETURN</ReturnButton> */}
    </>
  );
};
export default Ships;
