import React from "react";
import { useState } from "react";
import Card from "../../components/card/card.component";
import "./homepage.styles.css";
import { useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";
import ReactPaginate from "react-paginate";

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

  //funcion para desplegar los posts limitados
  const PostsSlicerDisplayer = () => {
    const postOnPage = totalPosts.slice(
      currentPostIndex,
      currentPostIndex + postsPerPage
    );
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
    <div className="box">
      <PostsSlicerDisplayer />

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePage}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};
export default HomePage;
