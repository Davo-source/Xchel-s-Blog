import { Carousel } from "react-bootstrap";
import React, { Fragment } from "react";
import "./carrousel.styles.css"
import {Link} from "react-router-dom";
import "animate.css"
    const Carrousel = ({totalPosts}) => {

        const postsToDisplay = totalPosts?.slice(0,4);

        return (
            <div className=" carousel g-0 animate__animated animate__zoomIn" >
                <Carousel
                    fade
                    interval={3000}
                >
                    {postsToDisplay?.map(({ title, desc, image, _id }) => (
                        <Carousel.Item key={_id}>
                            {image && <img className="image-resize" src={image} alt="slide show" />}
                            <Carousel.Caption>
                                <Link to={`/post/${_id}`}  style={{ textDecoration: "none" }}>
                                    <h2 className="title-card mb-5">{title}</h2>
                                </Link>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

    );
};

export default Carrousel;
