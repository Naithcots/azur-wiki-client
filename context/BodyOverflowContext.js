import { createContext, useEffect, useState } from "react";

const BodyOverflowContext = createContext();

export const BodyOverflowProvider = ({ children }) => {
  const [overflow, setOverflow] = useState("visible");

  useEffect(() => {
    document.body.style.overflow = overflow;
  }, [overflow]);

  return (
    <BodyOverflowContext.Provider value={{ overflow, setOverflow }}>
      {children}
    </BodyOverflowContext.Provider>
  );
};
export default BodyOverflowContext;
