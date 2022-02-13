import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import UserCotext from "../../Estados/Contexto";

import "./login.styles.css";


const Login = () => {
  //POR AHORA NO USAMOS ACTION Y METHOD:POST, NO HAY SERVIDOR
  //Todo hijo (h1) debe estar dentro de un elemento padre
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let url = window.location.pathname;
  let Xadmi = url.slice(1);

  const {login, setlogin} = useContext(UserCotext);
  
  const handleSumbit = async (event) => {
    event.preventDefault();
     
    try{
      const fetchAuth = await axios.post("/auth/" + Xadmi,{
        email: JSON.stringify(email),
        password: JSON.stringify(password)
      });
    }

    catch(err){
      console.log(err)
    }
    setlogin(true);
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
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
