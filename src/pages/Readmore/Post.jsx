import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Post.styles.css";

const Post = () => {
  let url = window.location.pathname;
  let PostId = url.slice(6);

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get("/posts/" + PostId);
      setPost(resp.data);
    };

    fetchPosts();
  }, [PostId]);

  return (
    <div className="All">
      <div className="Container">
        <div className="Image-container">
          <img src={post.image} className="Image" alt="imagen" />
        </div>
        <div className="title">
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </div>
      </div>
    </div>
  );
};
export default Post;
