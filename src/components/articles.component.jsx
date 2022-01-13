import React from "react";

import Card from './card.component'

export class Articles extends React.Component {
  constructor() {
    super();
    var today = new Date(),
    date = today.getDate() + '/' + (today.getMonth()+1) + '/' +  today.getFullYear();

    this.state = {
      sections: [
        {
          title: "Articulo de prueba",
          createdAt: date,
          description: "Descripcion de prueba",
          id: '1'

        },
        {
            title: "Articulo de prueba 2",
            createdAt: date,
            description: "Descripcion de prueba 2",
            id: '2'
          },
      ],
    };
  }

  render() {
    return (
      <div className="article-menu">
        {this.state.sections.map(({ id, title, createdAt, description }) => (
            <Card key={id} title={title} createdAt={createdAt} description={description}/>
        ))}
      </div>
    );
  }
}


