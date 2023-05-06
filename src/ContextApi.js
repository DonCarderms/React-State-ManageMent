import { createContext, useState } from "react";

export const MyContextAPi = createContext();

export const MyContextAPiProvider = ({ children }) => {
  const [state, setMyContext] = useState("value of my context initial");

  return (
    <MyContextAPi.Provider value={{ state, setMyContext }}>
      {children}
    </MyContextAPi.Provider>
  );
};
