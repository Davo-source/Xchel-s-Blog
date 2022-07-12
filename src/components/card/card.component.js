import React, {Fragment, useContext, useState} from "react";
import "./card.styles.css";
import {ContextGlobal} from "../../Estados/Contexto";
import ModalDeleteDialog from "../modal delete dialog/modal-delete-dialog";
import ThreeDotMenu from "./tree dot menu/three-dot-menu";
import {Card, CardMedia} from "@mui/material"
import "animate.css"
import {useNavigate} from "react-router-dom";

const CardComponent = ({Id,title,desc,createdAt,image}) => {
  const [dropdown, setDropdown] = useState(false);
  const [postId] = useState(Id);
  const [login] = useContext(ContextGlobal);
  const options = {year: 'numeric', month: 'long', day: 'numeric'}
  let navigate = useNavigate();
  const toggle = () => setDropdown(!dropdown);
    const handleClick = () => {
        navigate(`/post/${postId}`)
    };
  return (
    <Fragment>
        <ModalDeleteDialog postId={postId}/>
        <Card className="card-content animate__animated animate__fadeIn">
                <CardMedia
                    className="card-media"
                    onClick={() => handleClick()}
                    component="img"
                    height="200"
                    image={image}
                    alt={title}/>
        <div className="row">
            <div className={login ? "col-1 mt-2" : ""}>
                <ThreeDotMenu toggle={toggle}
                              login={login}
                              dropdown={dropdown}
                              postId={postId}/>
            </div>
            <div className="col">
                <div className="d-flex">

                    <div onClick={() => handleClick()}
                         className="title-home-card p-2 align-content-center">
                        {title}
                    </div>

                </div>

                <div className="p-2">
                    <span className="date-home-card">{new Date(createdAt).toLocaleDateString('es-ES', options)}</span>
                </div>

                <div className="description-home-card p-2">
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </div>
        </Card>
    </Fragment>
  );
};

export default CardComponent;
