import React from "react";
import "./newarticle.css";
const NewArticle = () => {
  return (
    <div className="container-md">
      <form method="POST" className="p-4">
        <div className="row ">
          <div className="form-group col-12 col-md-6">
            <h5>Title</h5>
            <input
              type="text"
              className="form-control mt-2 mb-3 "
              id="formGroupExampleInput"
              placeholder="..."
            />
          </div>
          <div className="form-group col-12 col-md-6">
            <h5>Image</h5>
            <input
              type="url"
              className="form-control mt-2 mb-3"
              id="formGroupExampleInput2"
              placeholder="..."
            />
          </div>
        </div>
        <div className="form-group">
          <h5>Category</h5>
          <select className="form-control mt-2 mb-3" id="FormControlSelect1">
            <option value="" selected="selected" hidden="hidden">
              Choose
            </option>
            <option>Android</option>
            <option>Porno duro</option>
            <option>Anal sex</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="form-group">
          <h5>Resume</h5>
          <input
            type="text"
            className="form-control mt-2 mb-3"
            id="formGroupExampleInput4"
            placeholder="..."
          />
        </div>

        <div className="form-group">
          <h5>Description</h5>
          <textarea
            className="form-control mt-2 mb-3"
            id="textArea"
            rows="8"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary col-12 col-md-3 mt-4">
          Post
        </button>
      </form>
    </div>
  );
};

export default NewArticle;
