import React from "react";
import { useState } from "react";
import "./EditArticle.css";
import axios from "axios";
import { useEffect } from "react";
import { PreviewMarkdown } from "../../components/previewMarkdown/PreviewMarkdown.jsx";

const EditArticle = () => {
  const [title, setTitle] = useState(" ");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [markDown, setMarkDown] = useState("");

  let url = window.location.pathname;
  let postId = url.split("/")[2];

  function setArticleValues(data) {
    setTitle(data.title);
    setImageURL(data.image);
    setDescription(data.desc);
    setMarkDown(data.markdown);
  }

  useEffect(() => {
    const fetchPost = async () => {
      const resp = await axios.get(`/posts/${postId}`);
      setArticleValues(resp.data);
    };
    fetchPost();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const update = {
      title: title,
      desc: description,
      image: imageURL,
      markdown: markDown,
    };
    //codigo axios put
    try {
      await axios
        .put(`/posts/${postId}`, update)
        .then(window.location.replace(`/post/${postId}`));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-md">
      <form className="p-4" onSubmit={handleSubmit}>
        <div className="row ">
          <div className="form-group col-12 col-md-6">
            <h5>Title</h5>
            <input
              type="text"
              className="form-control mt-2 mb-3 "
              id="formGroupExampleInput"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="form-group col-12 col-md-6">
            <h5>Image</h5>
            <input
              type="url"
              className="form-control mt-2 mb-3"
              id="formGroupExampleInput2"
              value={imageURL}
              onChange={(e) => setImageURL(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <h5>Resume</h5>
          <input
            type="text"
            className="form-control mt-2 mb-3"
            id="formGroupExampleInput4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <h5>Markdown content</h5>
          <textarea
            className="form-control mt-2 mb-3"
            id="textArea"
            rows="8"
            value={markDown}
            onChange={(e) => setMarkDown(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success col-12 col-md-3 mt-4">
          Confirm changes
        </button>
      </form>
      <PreviewMarkdown markdownText={markDown}></PreviewMarkdown>
    </div>
  );
};

export default EditArticle;
