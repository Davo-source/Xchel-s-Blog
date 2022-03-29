import React, { useEffect } from "react";
import { createContext, useState } from "react";



export const ContextGlobal = createContext();
const INITIAL_STATE = {
  state: JSON.parse(localStorage.getItem("login")) || false
}
export const UserContext = (props) => {
  const [state, setState] = useState(INITIAL_STATE.state);

  useEffect(()=> {
    localStorage.setItem("login", JSON.stringify(state))
  },[state])

  return (
    <ContextGlobal.Provider value={[state, setState]}>
      {props.children}
    </ContextGlobal.Provider>
  );
};
