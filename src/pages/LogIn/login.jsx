import React from "react";

import "./login.styles.css";
import NavBar from "../../components/navbar/navbar";

const Login = () => {
  //POR AHORA NO USAMOS ACTION Y METHOD:POST, NO HAY SERVIDOR
  //Todo hijo (h1) debe estar dentro de un elemento padre
  return (
    <div className="LoginForm">
      <div className="probando">
        <h1 className="title-login"> Login</h1>
        <form className="Login-Form">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="loginInput"
            placeholder=" Email... "
            required
          />
          <label>Password </label>
          <input
            type="password"
            name="password"
            className="loginInput"
            placeholder=" Password... "
            required
          />
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
