import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "Ayaka";

  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
      {console.log(children)}
    </UserContext.Provider>
  );
};
console.log({ UserContext });
