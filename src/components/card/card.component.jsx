import React from "react";
import { Link } from "react-router-dom"
import "./card.styles.css";

const Card = (post) => {

  return (
    <div
      className="card mx-auto border-0 border-bottom border-2 mt-4"
      style={{ maxWidth: 740 + "px" }}
    >
      <div className="row g-1 p-2">
        <div className="col-md-8 col-8  ">
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.desc}</p>
            <p className="card-text">
              <small className="text-muted"> {new Date(post.createdAt).toDateString()}</small>
            </p>
            <Link to={`/post/${post.Id}`}>
            <button type="button" className="btn btn-info"> Read more</button>
            </Link>
          </div>
        </div>
        <div className="col-md-4 col-4  align-self-center">
          <img src={post.image} className="img-fluid img-responsive" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Card;
