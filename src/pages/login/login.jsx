import axios from "axios";
import React from "react";
import { useState, useContext, useEffect } from "react";
import {ContextGlobal} from "../../Estados/Contexto";

import "./login.styles.css";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setLoginState, setAccessToken } = useContext(ContextGlobal);


  useEffect( () => {

    const errorTimeout = setTimeout(setError(""),5000);
    return() => {
        clearTimeout(errorTimeout);
    }
  },[email])

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const res = await axios.post("/auth/XchelAdministrador" ,{
          email: email,
          password: password,

      });
      setAccessToken(res.data.accessToken);
      setLoginState(true);
    }

    catch(err){
      setEmail("");
      setPassword("");
      setError(`Credenciales Equivocadas!! \n Probar diferentes`);
    }
  } 

  return (
    <div className="LoginForm">
      <div className="container py-8 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-10 col-md-5 col-lg-5 col-xl-4">
            <div className="card bg-dark text-white" style={{"borderRadius": "1rem"}}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-2 pb-6">
                  <h1 className="title-login"> Login</h1>
                  <p className="text-white-50 mb-3"> Please enter your email and password!</p>
                  <form className="Login-Form" onSubmit={handleSubmit}>
                    <div className="form-outline mb-2 mt-5">
                      <input
                        type="text"
                        id="typeEmail"
                        name="email"
                        placeholder="Email"
                        value={email}
                        className="form-EP form-control form-control-md"
                        required
                        onChange={(e) => {
                            setEmail(e.target.value);
                            }
                        }
                      />
                      <label className="form-label" htmlFor="typeEmail"></label>
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="typePassword"
                        name="password"
                        placeholder="Password"
                        value={password}
                        className="form-EP form-control form-control-md"
                        required
                        onChange={(event) => setPassword(event.target.value)}
                      />
                      <label className="form-label" htmlFor="typePassword"> </label>
                    </div>
                    <div className="text-danger">
                      <pre>{error}</pre>
                    </div>
                    <button type="submit" className="mt-2 btn btn-outline-light btn-lg px-5 button-disabled" disabled={
                    error !== "" ? true : false} >Login</button>
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
