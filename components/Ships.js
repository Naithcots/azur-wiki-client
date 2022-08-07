import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ActiveShip from "./ActiveShip";
import { useEffect, useState } from "react";

const GET_SHIPS_BY_NATIONALITY = gql`
  query getShipsByNat($nat: Nationality!) {
    shipsByNationality(nationality: $nat) {
      id
      names {
        en
        code
      }
      nationality
      thumbnail
      class
      rarity
      stars
      hullType
      stats {
        baseStats {
          health
          torpedo
          luck
          reload
        }
      }
      skills {
        names {
          en
        }
        icon
        description
      }
      gallery {
        description
        url
      }
      skins {
        name
        image
      }
      obtainedFrom {
        obtainedFrom
      }
    }
  }
`;

const Ships = ({ nation, setNation }) => {
  const { error, loading, data } = useQuery(GET_SHIPS_BY_NATIONALITY, {
    variables: { nat: nation },
  });
  // console.log(data, error);

  const [ships, setShips] = useState(null);
  const [ship, setShip] = useState(null);
  const [index, setIndex] = useState(0);
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

  if (loading) return <StyledShips>Loading...</StyledShips>;
  return (
    <StyledShips>
      <LeftArrow onClick={prevShip} />
      {ship && <ActiveShip ship={ship} />}
      <RightArrow onClick={nextShip} />
      <BackButton onClick={() => setNation(null)}>BACK</BackButton>
    </StyledShips>
  );
};
export default Ships;

const StyledShips = styled.div`
  height: 100vh;
  margin: 0 1.5em;

  display: grid;
  place-items: center;
  grid-template-columns: 5vw 1fr 5vw;
  gap: 2em;
`;

const LeftArrow = styled(FaChevronLeft)`
  font-size: 2.5rem;
  cursor: pointer;
`;

const RightArrow = styled(FaChevronRight)`
  font-size: 2.5rem;
  cursor: pointer;
`;

const BackButton = styled.button`
  padding: 1em 2em;

  position: absolute;
  bottom: 6vh;
  left: 9vw;

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
