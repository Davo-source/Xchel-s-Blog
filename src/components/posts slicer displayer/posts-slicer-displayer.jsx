import "./post-slicer-displayer.styles.css"
import Card from "../card/card.component";
import React from "react";

//funcion para desplegar los posts limitados
const PostsDisplayer = ({postOnPage}) => {
    return (
        postOnPage &&
        postOnPage.map(({ _id, title, createdAt, desc, image }) => (
            <Card
                Id={_id}
                key={_id}
                title={title}
                createdAt={createdAt}
                desc={desc}
                image={image}
            />
        ))
    );
};

export default PostsDisplayer;