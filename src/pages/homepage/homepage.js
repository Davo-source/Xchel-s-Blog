import React, {useEffect, useRef, useState} from "react";
import "./homepage.styles.css";
import axios from "axios";
import Separator from "../../components/separator/separator";
import Carrousel from "../../components/carrousel/carrousel";
import PostsDisplayer from "../../components/posts slicer displayer/posts-slicer-displayer";
import Paginator from "../../components/paginator/paginator";
import {Skeleton} from "@mui/material"
import "animate.css";
const HomePage = () => {
  
  const [totalPosts, setTotalPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const separator = useRef();

  /* La necesidad de isFirstRender es debido a que al ejecutar fetchPosts() y cambiar de componente
     existe la posibilidad de que ocurra un error debido a que quiere hacer un update de un
     state que ya no existe (debido a que se cambio el componente actual)
  */
  const [isFirstRender, setIsFirstRender] = useState(true);

  // establece la cantidad de posts en cada paginacion
  const postsPerPage = 6;

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

  const fetchPosts = async () => {
      const resp = await axios.get(`/posts`);
      setTotalPosts(resp.data);
  };

  //establecemos el indice del post actual de acuerdo a la paginacion
  const handlePage = (e) => {
    setCurrentPostIndex(e.selected * postsPerPage);
  };

  const postOnPage = totalPosts?.slice(
    currentPostIndex,
    currentPostIndex + postsPerPage
  );

  return (
    <div className="container g-0">

        {totalPosts.length ===0 ? <Skeleton width="100%"
                                            children={<Carrousel/>}/> :
            <Carrousel totalPosts={totalPosts}/>  }
      <div ref={separator}>
          <Separator/>
      </div>

      <div className="container posts mt-4 mt-md-5 p-0 p-lg-5">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-lg-5 g-0">
            <PostsDisplayer postOnPage={postOnPage}/>
        </div>
      </div>

        <Paginator onPageChange={handlePage}
                   pageCount={pageCount}
                   refToScroll = {separator}
        />
    </div>
  );
};

export default HomePage;
