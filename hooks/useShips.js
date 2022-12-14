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
  let startX, endX, pageX;

  const prevShip = () => {
    if (index === 0) return;
    setIndex(index - 1);
  };

  const nextShip = () => {
    if (index === ships.length - 1) return;
    setIndex(index + 1);
  };

  const checkSwipe = () => {
    const swipeWidth = Math.abs(startX - endX);
    if (swipeWidth < 0.35 * pageX) return;
    if (startX > endX) nextShip();
    else prevShip();
  };

  const touchStart = (e) => {
    startX = e.changedTouches[0].clientX;
    pageX = window.innerWidth;
  };
  const touchEnd = (e) => {
    endX = e.changedTouches[0].clientX;
    checkSwipe();
  };

  const keyEvent = (e) => {
    switch (e.key) {
      case "ArrowLeft":
        prevShip();
        break;
      case "ArrowRight":
        nextShip();
        break;
    }
  };

  useEffect(() => {
    // data && setShips(data.shipsByNationality.slice(0, 5));
    data && setShips(data.shipsByNationality);
  }, [data]);

  useEffect(() => {
    ships && setShip(ships[index]);
  }, [ships]);

  useEffect(() => {
    if (ship) {
      document.addEventListener("touchstart", touchStart);
      document.addEventListener("touchend", touchEnd);
      document.addEventListener("keydown", keyEvent);
    }

    return () => {
      document.removeEventListener("touchstart", touchStart);
      document.removeEventListener("touchend", touchEnd);
      document.removeEventListener("keydown", keyEvent);
    };
  }, [ship]);

  useEffect(() => {
    ships && setShip(ships[index]);
  }, [index]);

  return [loading, error, ship, prevShip, nextShip];
};
export default useShips;
