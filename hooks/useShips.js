import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import SHIPS_BY_NATIONALITY from "../queries/ShipsByNationality";

const useShips = (nation) => {
  const { error, loading, data } = useQuery(SHIPS_BY_NATIONALITY, {
    variables: { nat: nation },
  });

  const [ships, setShips] = useState(null);
  const [ship, setShip] = useState(null);
  const [index, setIndex] = useState(0);

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

  return { loading, error, ships, ship, prevShip, nextShip };
};
export default useShips;
