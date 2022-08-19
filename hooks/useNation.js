import { useContext } from "react";
import NationContext from "../context/NationContext";

const useNation = () => {
  const context = useContext(NationContext);
  return context;
};

export default useNation;
