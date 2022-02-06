import { useState } from "react";
import Card from "../../components/card/card.component"
import "./homepage.styles.css";
import { useEffect } from "react";
import axios from "axios";


const HomePage = () => {

  const [posts, setPosts] = useState([]);

  useEffect( () =>{
    const fetchPosts = async () => { 
      const resp =  await axios.get("/posts");
      setPosts(resp.data);
    }
    fetchPosts()
  },[])
  
  return (
<div className="box">
        {posts.map(
          ({ id, title, createdAt, desc, image }) => (
            <Card
              key={id}
              title={title}
              createdAt={createdAt}
              desc={desc}
              image={image}
            />
          )
        )}
      </div>
      );
}
export default HomePage;
