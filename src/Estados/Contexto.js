import React, { useEffect } from "react";
import { createContext, useState } from "react";


export const ContextGlobal = createContext();
const INITIAL_STATE_TOKENS = {
  loginState: false,
  accessToken: "random_token_not_applicable"
}
export const UserContext = (props) => {

  const [loginState, setLoginState] = useState(INITIAL_STATE_TOKENS.loginState);
  const [accessToken, setAccessToken] = useState(INITIAL_STATE_TOKENS.accessToken);

  // useEffect(()=> {
  //   localStorage.setItem("login", JSON.stringify(state))
  // },[state])

  const contextValue = {
    loginState,
    setLoginState,
    accessToken,
    setAccessToken,
  };

  return (
    <ContextGlobal.Provider value ={ contextValue }>
      {props.children}
    </ContextGlobal.Provider>
  );
};
