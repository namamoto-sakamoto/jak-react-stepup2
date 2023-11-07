import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserPrivider = () => {
  const { children } = props;
  return <UserContext.Provider>{Children}</UserContext.Provider>;
};
