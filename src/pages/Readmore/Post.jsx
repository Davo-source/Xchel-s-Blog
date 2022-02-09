import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Post = () => {


    let url = window.location.pathname;
    let PostId = url.slice(6);

    const [post, setPost] = useState({})

    useEffect( () =>{
        const fetchPosts = async () => { 
          const resp =  await axios.get("/posts/" + PostId);
          setPost(resp.data);
        }
        fetchPosts()
      },[PostId])

    return(
        <div className="">
            {post.title}
        </div>
    )
}
export default Post;