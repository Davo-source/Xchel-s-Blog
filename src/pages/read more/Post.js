import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./Post.styles.css";
import { PreviewMarkdown } from "../../components/preview markdown/PreviewMarkdown";
const Post = () => {
  let urlpre = window.location.pathname;
  let url = urlpre.split("/");
  let PostId = url[url.length-1];

  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get("/posts/" + PostId);
      setPost(resp.data);
    };

    fetchPosts();
  }, [PostId]);

  return (
    <div className="Post p-5">
      <div className="Container">
        <div className="Image-container">
          <img src={post.image} className="Image" alt="imagen" />
        </div>
        <div className="title">
          <h1>{post.title}</h1>
          <p>{post.desc}</p>
        </div>
      </div>

      <PreviewMarkdown markdownText={post.markdown}></PreviewMarkdown>
    </div>
  );
};
export default Post;
