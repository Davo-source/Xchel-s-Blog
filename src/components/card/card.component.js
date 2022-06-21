import React, {Fragment, useContext, useState} from "react";
import "./card.styles.css";
import {ContextGlobal} from "../../Estados/Contexto";
import ModalDeleteDialog from "../modal delete dialog/modal-delete-dialog";
import ThreeDotMenu from "./tree dot menu/three-dot-menu";
import {Card, CardMedia} from "@mui/material"
import "animate.css"

const CardComponent = ({Id,title,desc,createdAt,image}) => {
  const [dropdown, setDropdown] = useState(false);
  const [postId] = useState(Id);
  const [login] = useContext(ContextGlobal);


  const toggle = () => setDropdown(!dropdown);

  return (
    <Fragment>
        <ModalDeleteDialog postId={postId}/>
        <Card className="card-content animate__animated animate__fadeIn">
                <CardMedia
                    component="img"
                    height="200"
                    image={image}
                    alt={title}/>

            <div>
                <span>
                    <ThreeDotMenu toggle={toggle}
                                  login={login}
                                  dropdown={dropdown}
                                  postId={postId}/>
                </span>
                <div>{title}</div>
            </div>

            <div>
                <span>{new Date(createdAt).toDateString()}</span>
            </div>

            <div>
                {desc}
            </div>

        </Card>
    </Fragment>
  );
};

export default CardComponent;
