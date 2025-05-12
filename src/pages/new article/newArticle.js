import React, {useState} from "react";
import "./newarticle.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {PreviewMarkdown} from "../../components/preview markdown/PreviewMarkdown";
import { useContext } from "react";
import { ContextGlobal } from "../../Estados/Contexto";

const NewArticle = () => {
  const [title, setTitle] = useState();
  const [imageURL, setImageURL] = useState();
  const [description, setDescription] = useState();
  const [markDown, setMarkDown] = useState();
  const { accessToken } = useContext(ContextGlobal);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/posts/newArticle", {
        title,
        imageURL,
        description,
        markDown,
      },{
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });
      navigate(`/post/` + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-md mt-4">
      <div className="row">
        <div className="col">
          <form className="p-4" onSubmit={handleSubmit}>
          <div className="row ">
            <div className="form-group col-12 col-md-6">
             <h5>Title</h5>
             <input
              type="text"
              className="form-control mt-2 mb-3 "
              id="formGroupExampleInput"
              placeholder="introduce el titulo de tu articulo"
              onChange={(e) => setTitle(e.target.value)}
              required
              onInvalid={(e) => {
                e.target.setCustomValidity("Introduce un titulo");
              }}
              onInput={(e) => e.target.setCustomValidity("")}
            />
           </div>
           <div className="form-group col-12 col-md-6">
              <h5>Image</h5>
              <input
              type="url"
              className="form-control mt-2 mb-3"
              id="formGroupExampleInput2"
              placeholder="coloca la imagen URL de tu articulo"
              onChange={(e) => setImageURL(e.target.value)}
              onInvalid={(e) => {
                e.target.setCustomValidity("Introduce un URL válida");
              }}
              onInput={(e) => e.target.setCustomValidity("")}
              />
           </div>
         </div>
         <div className="form-group">
           <h5>Resume</h5>
            <input
            type="text"
            className="form-control mt-2 mb-3"
            id="formGroupExampleInput4"
            placeholder="coloca un resumen breve de tu articulo"
            onChange={(e) => setDescription(e.target.value)}
            required
            onInvalid={(e) => {
              e.target.setCustomValidity("Introduce una descripción breve");
            }}
            onInput={(e) => e.target.setCustomValidity("")}
           />
          </div>

         <div className="form-group">
            <h5>Markdown content</h5>
            <textarea
            className="form-control mt-2 mb-3"
            id="textArea"
            rows="8"
            placeholder="coloca el contenido total del articulo"
            onChange={(e) => setMarkDown(e.target.value)}
            required
            onInvalid={(e) => {
              e.target.setCustomValidity(
                "Introduce el contenido de tu articulo"
              );
            }}
            onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>
         <button type="submit" className="btn btn-primary col-12 col-md-3 mt-4">
          Post
          </button>
        </form>
        </div>
         <div className="preview col-12 col-md-6 p-3">
           <PreviewMarkdown markdownText={markDown}></PreviewMarkdown>
         </div>
       </div>
     </div>
  );
};

export default NewArticle;
