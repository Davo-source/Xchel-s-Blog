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

  const postsPerPage = 6; // establece la cantidad de posts en cada paginacion

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
  const temp = postOnPage.slice(0,3);

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

  const PostCarruselFirstPage = () =>{
    return(
      postOnPage && 
      (currentPostIndex===0) &&
      <Carousel variant = "dark">{
      temp.map(({title, desc, image, _id}) => (
            <Carousel.Item>
              
            <img
            className="image-resize"
            src={image}
          alt="slide show"
          />
          
           <Carousel.Caption>
           <Link to={`/post/${_id}` } style={{ textDecoration: 'none' }}>
           <h3 className="title-card">{title}</h3>
          </Link>
            <p>{desc}</p>
          </Carousel.Caption>
            </Carousel.Item>
          )
        
      )}
      </Carousel>
    );
  }

  useEffect(() => {
    if (isFirstRender) {
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

      <div className="box">
      <PostsSlicerDisplayer />
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePage}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </Fragment>
  );
};
export default HomePage;

