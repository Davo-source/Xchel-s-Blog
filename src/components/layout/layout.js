import React from 'react'
import NavBar from "../navbar/navbar";
import {Outlet} from "react-router-dom"
import Footer from "../footer/footer";

export const Layout = () => {
    return(
      <div>
          <NavBar/>
          <Outlet/>
          <Footer/>
      </div>
    );
};