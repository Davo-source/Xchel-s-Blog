import React from "react";
import { useState } from "react";
import Card from "../../components/card/card.component";
import "./homepage.styles.css";
import { useEffect } from "react";
import axios from "axios";
import { Carousel } from "react-bootstrap";


const HomePage = () => {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get("/posts");
      setPosts(resp.data);
    };
    fetchPosts();
  }, []);
 
  const temp = posts.slice(0,3);

  return (
    <div className="box">
      <Carousel>
        {temp.map(({_id, title, desc, image}) => (
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
        
        ))}
      </Carousel>
 
     {posts.map(({ _id, title, createdAt, desc, image }) => (
        <Card
          Id={_id}
          key={_id}
          title={title}
          createdAt={createdAt}
          desc={desc}
          image={image}
        />
      ))}
    </div>
  );
};
export default HomePage;
