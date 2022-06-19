import React, {Fragment, useEffect, useState} from "react";
import "./homepage.styles.css";
import axios from "axios";
import Separator from "../../components/separator/separator";
import Carrousel from "../../components/carrousel/carrousel";
import PostsDisplayer from "../../components/posts slicer displayer/posts-slicer-displayer";
import Paginator from "../../components/paginator/paginator";

const HomePage = () => {
  
  const [totalPosts, setTotalPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

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

  const postOnPage = totalPosts.slice(
    currentPostIndex,
    currentPostIndex + postsPerPage
  );

  return (
    <Fragment>
      <Carrousel totalPosts={totalPosts} />

      <Separator/>

      <div className="box">
        <PostsDisplayer postOnPage={postOnPage}/>
      </div>

        <Paginator onPageChange={handlePage}
                   pageCount={pageCount}
        />
    </Fragment>
  );
};

export default HomePage;
