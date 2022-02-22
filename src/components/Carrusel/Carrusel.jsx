import { Carousel } from "react-bootstrap";
import { Fragment } from "react";

const Carrusel = ({title, desc, image}) => {
    return(
        <Fragment>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{desc}</p>
        </Carousel.Caption>
      </Carousel.Item>
        </Fragment>
    )
}

export default Carrusel;