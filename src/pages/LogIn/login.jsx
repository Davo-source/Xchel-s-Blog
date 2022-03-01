import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import {ContextGlobal} from "../../Estados/Contexto";

import "./login.styles.css";


const Login = () => {
  //POR AHORA NO USAMOS ACTION Y METHOD:POST, NO HAY SERVIDOR
  //Todo hijo (h1) debe estar dentro de un elemento padre
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  //const emailRef = useRef();
  //const passwordRef = useRef();

  const [login, setlogin] = useContext(ContextGlobal);


  const handleSumbit = async (event) => {
    event.preventDefault();
     
    try{
      const res = await axios.post("/auth/XchelAdministrador" ,{
          email: email,
          password: password,

      });
      console.log(res.data);
      setlogin(true) 
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
            //ref={emailRef}
          />
       
          <label>Password </label>
          <input
            type="password"
            name="password"
            className="loginInput"
            placeholder=" Password... "
            required
            onChange={(event) => setPassword(event.target.value)}
            //ref={passwordRef}
          />
          
          <button type="submit" className="login-button" disabled={login}>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
