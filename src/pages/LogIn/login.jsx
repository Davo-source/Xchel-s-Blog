import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import {ContextGlobal} from "../../Estados/Contexto";

import "./login.styles.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, setLogin] = useContext(ContextGlobal);

  const handleSumbit = async (event) => {
    event.preventDefault();
     
    try{
      const res = await axios.post("/auth/XchelAdministrador" ,{
          email: email,
          password: password,

      });
      console.log(res.data);
      setLogin(true)
    }
    catch(err){
      console.log(err)
    }
  } 

  return (
    <div className="LoginForm">
      <div className="probando">
        <h1 className="title-login"> Login</h1>
        <form className="Login-Form" onSubmit={handleSumbit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="loginInput"
            placeholder=" Email... " 
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password </label>
          <input
            type="password"
            name="password"
            className="loginInput"
            placeholder=" Password... "
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <button type="submit" className="login-button" disabled={login}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
