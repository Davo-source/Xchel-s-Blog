import React from "react";
import { Link } from "react-router-dom";
import "./card.styles.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../../Estados/Contexto";


const Card = (post) => {
  const [dropdown, setDropdown] = useState(false);
  const [postId] = useState(post.Id);
  const [login] = useContext(ContextGlobal);

  let navigate = useNavigate();

  const toggle = () => setDropdown(!dropdown);

  const handleDelete = async () => {
    try {
      const res = await axios.delete("/posts/" + postId, {});
      window.location.replace("/");
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = () => {
    navigate(`/editArticle/${postId}`);
  };

  return (
      <div
      className="card mx-auto border-0 border-bottom border-2 mt-3 p-3 mr-4"
      style={{ maxWidth: 740 + "px" }}
    >
      <div
        className="modal fade"
        id={`exampleModalCenter-${postId}`}
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="false"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Are you sure?
              </h5>
            </div>
            <div className="modal-body">
              This will delete all the post content and no undo can be done
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={handleDelete}
                type="button"
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
      <div className=" col-lg-4 col-12 align-self-center">
          <img src={post.image} className=" img-responsive image-resize" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="headerCard">
              <h5 className="card-title">{post.title}</h5>
              <div className={`dropdownMenu ${login ? "" : "hide"}`}>
                <button className="btn btn-sm" onClick={toggle}>
                  <i className=" fa-solid fa-ellipsis fa-lg"></i>
                </button>
                <div className={`dropdown-menu ${dropdown ? "show" : ""}`}>
                  <button
                    onClick={handleEdit}
                    type="button"
                    className="dropdown-item"
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <button
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModalCenter-${postId}`}
                    type="button"
                    className="dropdown-item"
                  >
                    <i className="fa-solid fa-trash-can"></i> Delete
                  </button>
                </div>
              </div>
            </div>

            <p className="card-text align-self-center">{post.desc}</p>
            <p className="card-text">
              <small className="text-muted">
                {new Date(post.createdAt).toDateString()}
              </small>
            </p>
            <Link to={`/post/${post.Id}`}>
              <button type="button" className="btn btn-dark btn-sm">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
