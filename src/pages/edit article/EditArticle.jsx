import React from "react";
import { useState} from "react";
import "./EditArticle.css";
import axios from "axios";
import { useEffect } from "react";
import { PreviewMarkdown } from "../../components/preview markdown/PreviewMarkdown.jsx";
import { useNavigate } from "react-router-dom"

const EditArticle = () => {
  const [title, setTitle] = useState(" ");
  const [imageURL, setImageURL] = useState("");
  const [description, setDescription] = useState("");
  const [markDown, setMarkDown] = useState("");

  let urlpre = window.location.pathname;
  let url = urlpre.split("/");
  let postId = url[url.length-1];

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
  }, [postId]);
  
  let navigate = useNavigate();
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
      navigate(`/xcheldev/post/${postId}`, {replace: true})
    }
     catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-md mt-4">
      <div className="row">
        <div className="col">
          <form className="p-4" onSubmit={handleSubmit}>
            <div className="row ">
              <div className="form-group col-12 col-md-5">
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
              <div className="form-group col-12 col-md-7">
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
                rows="30"
                value={markDown}
                onChange={(e) => setMarkDown(e.target.value.toString())}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success  mt-4">
              Confirm changes
            </button>
          </form>
        </div>

        <div className="preview col-12 col-md-6 p-5">
          <PreviewMarkdown markdownText={markDown}></PreviewMarkdown>
        </div>
      </div>
    </div>
  );
};

export default EditArticle;
