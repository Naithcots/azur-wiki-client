import { useQuery } from "@apollo/client";
import styled, { keyframes } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ShipGeneral from "./ShipGeneral";
import { useEffect, useState } from "react";
import shipsByNationality from "../queries/ShipsByNationality";
import ShipPanel from "./ShipPanel";
import useScrollWheel from "../hooks/useScrollWheel";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Ships = ({ nation, setNation }) => {
  const { error, loading, data } = useQuery(shipsByNationality, {
    variables: { nat: nation },
  });
  // console.log(data, error);

  const [ships, setShips] = useState(null);
  const [ship, setShip] = useState(null);
  const [index, setIndex] = useState(0);
  const [transformValue, setPanelInput] = useScrollWheel();
  // console.log("Active Ship: ", ship);

  const prevShip = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const nextShip = () => {
    if (index === ships.length - 1) return;
    setIndex(index + 1);
  };

  useEffect(() => {
    // data && setShips(data.shipsByNationality.slice(0, 5));
    data && setShips(data.shipsByNationality);
  }, [data]);

  useEffect(() => {
    ships && setShip(ships[index]);
  }, [ships]);

  useEffect(() => {
    ships && setShip(ships[index]);
  }, [index]);

  if (loading) return (
  <Container>
    <Box>
        <Spinner />
        <LoadingText>Loading...</LoadingText>
      </Box>
    </Container>);

  return (
    <>
      <StyledShips transformValue={transformValue}>
        {ship && <ShipGeneral ship={ship} setPanelInput={setPanelInput} />}
        {ship && <ShipPanel ship={ship} />}
      </StyledShips>

      <LeftArrow onClick={prevShip} />
      <RightArrow onClick={nextShip} />
      <BackButton onClick={() => setNation(null)}>BACK</BackButton>
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
`

const SpinnerAnim = keyframes`
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
`

const Spinner = styled(CgSpinnerTwoAlt)`
  font-size: 4rem;

  animation: ${SpinnerAnim} 3000ms linear infinite;
`;

const LoadingText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`

const StyledShips = styled.div`
  margin: 0 7vw;

  transform: ${({ transformValue }) => `translateY(${transformValue}px)`};
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

const BackButton = styled.button`
  padding: 1em 2em;

  position: absolute;
  /* bottom: 6vh; */
  /* left: 9vw; */

  top: 2.25vh;
  right: 10vw;

  border-radius: 0 0.5em 0.5em;

  font-size: 1.25rem;
  font-weight: 600;

  border: none;
  color: #fff;
  background-color: #111;

  cursor: pointer;

  transition: transform 100ms;

  &:hover {
    transform: scale(1.05);
  }
`;
