import axios from "axios";
import React from "react";
import { useState, useContext } from "react";
import {ContextGlobal} from "../../Estados/Contexto";

import "./login.styles.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [login, setLogin] = useContext(ContextGlobal);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const res = await axios.post("/auth/XchelAdministrador" ,{
          email: email,
          password: password,

      });
      console.log(res.data);
      setLogin(true)
      setError("");
    }
    catch(err){
      setError("Credenciales Equivocadas!! Gilipollas");
      console.log(err)
    }
  } 

  return (
    <div className="LoginForm">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{"borderRadius": "1rem"}}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h1 className="title-login"> Login</h1>
                  <p className="text-white-50 mb-5"> Please enter your email and password! dickhead</p>
                  <form className="Login-Form" onSubmit={handleSubmit}>
                    <div className="form-outline mb-2 mt-5">
                      <input
                        type="text"
                        id="typeEmail"
                        name="email"
                        placeholder="Email"
                        className="form-EP form-control form-control-md"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="typeEmail"></label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePassword"
                        name="password"
                        placeholder="Password"
                        className="form-EP form-control form-control-md"
                        required
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <label className="form-label" htmlFor="typePassword"> </label>
                    </div>
                    <div className="text-danger">
                      <pre>{error}</pre>
                    </div>
                    <button type="submit" className="mt-4 btn btn-outline-light btn-lg px-5 button-disabled" disabled={login}>Login</button>
                    
                    <div className="d-flex justify-content-center tesxt-center mt-4 pt-1">
                      <a href="https://www.facebook.com/davidalejandro.oramasavila" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                      <a href=
                      "https://www.google.com/search?q=osos+maduros&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiAyqrqxr74AhXtK0QIHeHtCQYQ_AUoAXoECAEQAw&biw=1280&bih=609&dpr=1.5"
                      className="text-white"><i className="fab fa-google fa-lg mx-4 px-2"></i></a>
                      <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg"></i></a>
                    </div>

                  </form>
                </div>  
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
    
  );
};

export default Login;
