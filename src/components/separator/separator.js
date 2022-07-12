import "./separator.styles.css"
import React from "react";
import {useNavigate} from "react-router-dom";

const Separator = () => {
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/xcheladmin");
    }
    return (
        <div className="separador mt-5">
            <i onClick={()=> handleClick()}  className="far fa-list-alt"></i>
        </div>
    );
}

export default Separator;