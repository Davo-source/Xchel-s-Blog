import React from "react"
import "./footer.css"
import {Typography} from "@mui/material";

    const Footer = () => {

    return (
        <section className= "footer-section">
            <hr/>
            <section className= "d-flex justify-content-center">
                <Typography variant="subtitle2">
                    Xchel developer &copy; 2022
                </Typography>
            </section>
        </section>
    )
    }

    export default Footer;