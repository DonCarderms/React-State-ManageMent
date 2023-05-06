import { createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const user = {
    name: "don",
    idade: "19",
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
