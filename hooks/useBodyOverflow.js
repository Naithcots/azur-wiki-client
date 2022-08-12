import { useContext } from "react";
import BodyOverflowContext from "../context/BodyOverflowContext";

const useBodyOverflow = () => {
  const context = useContext(BodyOverflowContext);
  return context;
};
export default useBodyOverflow;
