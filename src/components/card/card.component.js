import React, {Fragment, useContext, useState} from "react";
import "./card.styles.css";
import {ContextGlobal} from "../../Estados/Contexto";
import ModalDeleteDialog from "../modal delete dialog/modal-delete-dialog";
import ThreeDotMenu from "./tree dot menu/three-dot-menu";
import {Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material"
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
        <Card  sx={{ borderRadius: 7, maxHeight: "400px", height:"400px", background: "#ceead6"}}>
            <div>
            <ThreeDotMenu login={login}
                                  postId={postId}/>
            </div>
            <CardActionArea sx={{ height: '100%'}}>
            <CardMedia
            component="img"
            height="120"
            image={image}
            alt="error image"
            />
                <CardContent sx={{ height: '100%'}}>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        onClick={() => handleClick()}
                        sx={{ cursor: 'pointer', fontWeight: "bold" }}
                        align="center">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center"
                    sx= 
                    {{
                    paddingTop:'5px', 
                    fontStyle: 'italic'
                    }}>
                        {new Date(createdAt).toLocaleDateString('en-US', options)}</Typography>
                    <Typography variant="body1" align="center"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6
                      }}
                    >
                        {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    </Fragment>
  );
};

export default CardComponent;
