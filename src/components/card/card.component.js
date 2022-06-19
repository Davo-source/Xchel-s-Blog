import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import "./card.styles.css";
import {ContextGlobal} from "../../Estados/Contexto";
import ModalDeleteDialog from "../modal delete dialog/modal-delete-dialog";
import ThreeDotMenu from "./tree dot menu/three-dot-menu";

const CardComponent = ({Id,title,desc,createdAt,image}) => {
  const [dropdown, setDropdown] = useState(false);
  const [postId] = useState(Id);
  const [login] = useContext(ContextGlobal);

  const toggle = () => setDropdown(!dropdown);

  return (
    <div>
      <ModalDeleteDialog postId={postId}/>

  <div className="outside">
  <Link to={`/post/${Id}`} className="link-cards">
      <div className="image-border" style={{backgroundImage: `url(${image})`}}>
          
        </div>
        </Link>
      <div className="content">
          <div className="headerCard">
              <h5 className="card-title mt-4">{title}</h5>
              <ThreeDotMenu postId={postId}
                            dropdown={dropdown}
                            login={login}
                            toggle={toggle} />
            </div>
            <hr></hr>
           <div className="sub-content"> 
            <Link to={`/post/${Id}`} className="link-cards">
            <span className="card-text">{desc}</span>
            <p className="card-text">
              <small className="text-muted mt-2">
                {new Date(createdAt).toDateString()}
              </small>
            </p>
            </Link>
          </div>
      </div>
      
</div>
</div>
  );
};

export default CardComponent;
