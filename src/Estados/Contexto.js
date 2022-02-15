import React from "react";
import { createContext, useState } from "react";

export const ContextGlobal = createContext();

export const UserContext = (props) => {
  const [state, setState] = useState(false);

  return (
    <ContextGlobal.Provider value={[state, setState]}>
      {props.children}
    </ContextGlobal.Provider>
  );
};
