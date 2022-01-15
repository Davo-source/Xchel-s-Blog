import React from "react"

import './login.styles.css'


const Login = () => { //POR AHORA NO USAMOS ACTION Y METHOD:POST, NO HAY SERVIDOR
    //Todo hijo (h1) debe estar dentro de un elemento padre
    return(
        <div className="LoginForm"> 
        <div className="probando">
        <h1 className="title-login"> Login</h1>
            <form className="Login-Form"> 
                <label>Email</label>
                <input type='text' className="loginInput" placeholder="Correo... "/>
                <label>Password </label>
                <input type='password' className="loginInput" placeholder="Contrasenia... "/>
                <button className="login-button">Login</button>
            </form>
        </div>
        </div>
        
    )
}

export default Login;