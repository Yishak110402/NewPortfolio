import { createContext, useState } from "react";

export const GeneralContext = createContext();

export default function GeneralProvider({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <GeneralContext.Provider
      value={{
        navOpen,
        setNavOpen,
      }}>
      {children}
    </GeneralContext.Provider>
  );
}
