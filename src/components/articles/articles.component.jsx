import React from "react";

import Card from "../card/card.component";
import "./articles.components.css";
export class Articles extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          image:
            "https://lossietereinos.com/wp-content/uploads/2020/12/EoVcSwEU4AA3E8i.jpeg",
          title: "Articulo de prueba",
          createdAt: "27/1/2022",
          description:
            "This is lorem ipsum dolelow as a natural lead-in to additional content. This content is a little bit longer. ewrfhskcnk edesfdskjfsd sdf lorem ipsum dolor sit amed",
          id: "1",
        },
        {
          image: "https://www.iagua.es/sites/default/files/agua_28.jpg",
          title: "Articulo de prueba 2",
          createdAt: "27/1/2022",
          description:
            "This is a wider card with al lead-in to additional content. This content is a little bit          longer. ewrfhskcnk edesfdskjfsd sdf lorem ipsum dolor sit amed",
          id: "2",
        },
        {
          image:
            "https://conceptodefinicion.de/wp-content/uploads/2014/03/codigo-.jpg",
          title: "Articulo de prueba 3",
          createdAt: "27/1/2022",
          description:
            "This is a wider card natural lead-in to additional content. This content is a little bitlonger. ewrfhskcnk edesfdskjfsd sdf lorem ipsum dolor sit amed",
          id: "3",
        },
      ],
    };
  }

  render() {
    return (
      <div className="box">
        {this.state.sections.map(
          ({ id, title, createdAt, description, image }) => (
            <Card
              key={id}
              title={title}
              createdAt={createdAt}
              description={description}
              image={image}
            />
          )
        )}
      </div>
    );
  }
}
