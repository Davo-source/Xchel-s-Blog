import React from "react";

import Card from "../card/card.component";
import "./articles.components.css";

const Articles =  (posts) =>  {
  return(
    <div className="box">
      {posts.map((p)=>(
        <h1>{p.title}</h1>
      ))}
    </div>
  )
}

export default Articles;