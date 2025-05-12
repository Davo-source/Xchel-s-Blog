import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UserContext } from "./Estados/Contexto";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios';
import axiosInstance from "./interceptors/axiosInterceptorsInstance";

axios.defaults.baseURL= process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true;

const root = createRoot(document.getElementById("root"))
root.render(<React.StrictMode>
  <UserContext>
    <App />
  </UserContext>
</React.StrictMode>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
