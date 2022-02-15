import React from "react";
import { createContext, useState } from "react";

const UserContext = (props) => {
  const ContextGlobal = createContext();

  const [state, setState] = useState(false);

  return (
    <ContextGlobal.Provider value={[state, setState]}>
      {props.children}
    </ContextGlobal.Provider>
  );
};

export default UserContext;
