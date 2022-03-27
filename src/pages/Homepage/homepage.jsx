import React, { Fragment } from "react";
import { useState } from "react";
import Card from "../../components/card/card.component";
import "./homepage.styles.css";
import { useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [totalPosts, setTotalPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const objetoIcons = {
    nextIcon: <span className="arrow_carrot-next"></span>,
    prevIcon: <span className="arrow_carrot-prev"></span>,
  };


  const postsPerPage = 12; // establece la cantidad de posts en cada paginacion

  const fetchPosts = async () => {
    const resp = await axios.get("/posts");
    setTotalPosts(resp.data);
  };

  const handlePage = (e) => {
    setCurrentPostIndex(e.selected * postsPerPage); //establecemos el indice del post actual de acuerdo a la paginacion
  };

  const postOnPage = totalPosts.slice(
    currentPostIndex,
    currentPostIndex + postsPerPage
  );
  const temp = totalPosts.slice(0, 12);

  //funcion para desplegar los posts limitados
  const PostsSlicerDisplayer = () => {
    return (
      postOnPage &&
      postOnPage.map(({ _id, title, createdAt, desc, image }) => (
        <Card
          Id={_id}
          key={_id}
          title={title}
          createdAt={createdAt}
          desc={desc}
          image={image}
        />
      ))
    );
  };

  const PostCarruselFirstPage = () => {
    return (
      postOnPage &&
      currentPostIndex === 0 && (
        <Carousel
          fade
          interval={2500}
          nextIcon={objetoIcons.nextIcon}
          prevIcon={objetoIcons.prevIcon}
        >
          {temp.map(({ title, desc, image, _id }) => (
            <Carousel.Item key={_id}>
              <img className="image-resize" src={image} alt="slide show" />

              <Carousel.Caption>
                <Link to={`/xcheldev/post/${_id}`} style={{ textDecoration: "none" }}>
                  <h2 className="title-card">{title}</h2>
                </Link>
                <p>{desc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      )
    );
  };

  useEffect(() => {
    
    if (isFirstRender) {
      window.scrollTo(0, 0);
      fetchPosts();
      setIsFirstRender(!isFirstRender);
    } else {
      setPageCount(Math.ceil(totalPosts.length / postsPerPage));
    }
    return () => {
      setIsFirstRender(true);
    };
  }, [totalPosts]);

  return (
    <Fragment>
      <PostCarruselFirstPage />

      <div className="separador mt-5">
        <i className="far fa-list-alt"></i>
      </div>
      <div className="box">
        <PostsSlicerDisplayer />
      </div>
      <div className="paginate-container">
      <ReactPaginate
        breakLabel="..."
        nextLabel=" "
        onPageChange={handlePage}
        onClick={() => (window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        }))}
        pageCount={pageCount}
        previousLabel=" "
        renderOnZeroPageCount={null}
        activeLinkClassName="activo-boton"
        disabledLinkClassName="desactivo-boton"
        disabledClassName="inactivo-number"
      />
      </div>
      <div>Foot</div>
    </Fragment>
  );
};

export default HomePage;
