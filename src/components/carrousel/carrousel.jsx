import { Carousel } from "react-bootstrap";
import React, { Fragment } from "react";
import "./carrousel.styles.css"
import {Link} from "react-router-dom";

    const objetoIcons = {
    nextIcon: <span className="arrow_carrot-next"></span>,
    prevIcon: <span className="arrow_carrot-prev"></span>,
    };

    const Carrousel = ({totalPosts}) => {

        const postsToDisplay = totalPosts.slice(0,4);

        return (
                <Carousel
                    fade
                    interval={2500}
                    nextIcon={objetoIcons.nextIcon}
                prevIcon={objetoIcons.prevIcon}>
                {postsToDisplay.map(({ title, desc, image, _id }) => (
                    <Carousel.Item key={_id}>
                        <img className="image-resize" src={image} alt="slide show" />

                        <Carousel.Caption>
                            <Link to={`/post/${_id}`} style={{ textDecoration: "none" }}>
                                <h2 className="title-card">{title}</h2>
                            </Link>
                            <p>{desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
    );
};

export default Carrousel;
