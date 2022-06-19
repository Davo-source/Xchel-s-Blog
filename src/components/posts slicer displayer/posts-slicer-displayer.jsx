import "./post-slicer-displayer.styles.css"
import Card from "../card/card.component";
import React from "react";

//funcion para desplegar los posts limitados
const PostsDisplayer = ({postOnPage}) => {
    return (
        postOnPage &&
        postOnPage?.map(({ _id, title, createdAt, desc, image }) => (
            <div key={_id} className="col">
                <Card
                    key={_id}
                    title={title}
                    createdAt={createdAt}
                    desc={desc}
                    image={image}
                />
            </div>

        ))
    );
};

export default PostsDisplayer;