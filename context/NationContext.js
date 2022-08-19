import { createContext, useState } from "react";

const NationContext = createContext();

export const NationProvider = ({ children }) => {
  const [nation, setNation] = useState(null);

  return (
    <NationContext.Provider value={{ nation, setNation }}>
      {children}
    </NationContext.Provider>
  );
};

export default NationContext;
