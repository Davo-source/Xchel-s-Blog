import React from "react";
import "./card.styles.css";

const Card = ({ title, createdAt, description }) => {
  return (
    <div className="Card-item">
      <h3>{title}</h3>
      <span>{createdAt}</span>
      <p>{description}</p>
    </div>
  );
};

export default Card;
