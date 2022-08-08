import styled, { keyframes } from "styled-components";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSkullCrossbones,
} from "react-icons/fa";
import ShipGeneral from "./ShipGeneral";
import ShipPanel from "./ShipPanel";
import useScrollWheel from "../hooks/useScrollWheel";
import useShips from "../hooks/useShips";

const Ships = ({ nation, setNation }) => {
  const { loading, error, ship, prevShip, nextShip } = useShips(nation);
  const [transformValue, setPanelInput] = useScrollWheel();

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
        {ship && <ShipPanel ship={ship} />}
      </StyledShips>

      <LeftArrow onClick={prevShip} />
      <RightArrow onClick={nextShip} />
      <ReturnButton onClick={() => setNation(null)}>RETURN</ReturnButton>
    </>
  );
};
export default Ships;

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  place-items: center;

  position: relative;
`;

const Box = styled.div`
  text-align: center;
`;

const SpinnerAnim = keyframes`
  from {
    transform: rotateZ(0);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

const ErrorIconAnim = keyframes`
  from {
    transform: rotateY(0);
  }

  25% {
    transform: rotateY(30deg);
  }

  75% {
    transform: rotateY(-30deg);
  }

  to {
    transform: rotateY(0);
  }

`;

const Spinner = styled(CgSpinnerTwoAlt)`
  font-size: 4rem;

  animation: ${SpinnerAnim} 3000ms linear infinite;
`;

const ErrorIcon = styled(FaSkullCrossbones)`
  font-size: 4rem;

  animation: ${ErrorIconAnim} 3000ms infinite;
`;

const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 600;

  color: ${({ error }) => error && "red"};
`;

const StyledShips = styled.div`
  margin: 0 7vw;

  transform: ${({ transformValue }) =>
    `translate3d(0, ${transformValue}px, 0)`};
  transition: transform 250ms;
`;

const LeftArrow = styled(FaChevronLeft)`
  font-size: 2.5rem;
  cursor: pointer;

  position: fixed;
  top: 50%;
  left: 2vw;
`;

const RightArrow = styled(FaChevronRight)`
  font-size: 2.5rem;
  cursor: pointer;

  position: fixed;
  top: 50%;
  right: 2vw;
`;

const ReturnButton = styled.button`
  padding: 1em 2em;

  position: absolute;

  top: 2.25vh;
  right: 10vw;

  border-radius: 0 0.5em 0.5em;

  font-size: 1.25rem;
  font-weight: 600;

  border: none;
  color: #fff;
  background-color: #111;

  cursor: pointer;

  z-index: 925;

  transition: transform 100ms;

  &:hover {
    transform: scale(1.05);
  }
`;
