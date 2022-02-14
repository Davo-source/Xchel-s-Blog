import axios from "axios";
import React from "react";
import { useState, useContext, useRef } from "react";
import {ContextGlobal} from "../../Estados/Contexto";

import "./login.styles.css";


const Login = () => {
  //POR AHORA NO USAMOS ACTION Y METHOD:POST, NO HAY SERVIDOR
  //Todo hijo (h1) debe estar dentro de un elemento padre
  const emailRef = useRef();
  const passwordRef = useRef();

  const [login, setlogin] = useContext(ContextGlobal);
  
  const handleSumbit = async (event) => {
    event.preventDefault();
     
    try{
      const res = await axios.post("/auth/XchelAdministrador" ,{
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      console.log(res)
    }
    catch(err){
      console.log(err)
    }
    setlogin(true)
    console.log(login)
    
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
            //onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
       
          <label>Password </label>
          <input
            type="password"
            name="password"
            className="loginInput"
            placeholder=" Password... "
            required
            //onChange={(event) => setPassword(event.target.value)}
            ref={passwordRef}
          />
          
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
