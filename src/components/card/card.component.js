import React, {Fragment, useContext, useState} from "react";
import "./card.styles.css";
import {ContextGlobal} from "../../Estados/Contexto";
import ModalDeleteDialog from "../modal delete dialog/modal-delete-dialog";
import ThreeDotMenu from "./tree dot menu/three-dot-menu";
import {Card} from "@mui/material"
import "animate.css"
import {useNavigate} from "react-router-dom";

const CardComponent = ({Id,title,desc,createdAt,image}) => {
  const [postId] = useState(Id);
  const [login] = useContext(ContextGlobal);
  const options = {year: 'numeric', month: 'long', day: 'numeric'}
  let navigate = useNavigate();
    const handleClick = () => {
        navigate(`/post/${postId}`)
    };
  return (
    <Fragment>
        <ModalDeleteDialog postId={postId}/>
        <Card className="card-content animate__animated animate__fadeIn">
            <div
                className="card-media"
                style={{background: `url(${image})`}}>
                <div className="dot-menu d-flex justify-content-end">
                    <ThreeDotMenu login={login}
                                  postId={postId}/>
                </div>
                <div className="clickable" onClick={() => handleClick()}/>
            </div>
            <div className="p-3 p-lg-4">
                <div className="d-flex">

                    <div onClick={() => handleClick()}
                         className="title-home-card p-0 align-content-center">
                        {title}
                    </div>

                </div>

                <div>
                    <span className="date-home-card">{new Date(createdAt).toLocaleDateString('es-ES', options)}</span>
                </div>

                <div className="description-home-card">
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
        </Card>
    </Fragment>
  );
};

export default CardComponent;
