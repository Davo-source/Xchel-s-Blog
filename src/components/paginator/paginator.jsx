import "./paginator.styles.css"
import ReactPaginate from "react-paginate";
import React from "react";

const Paginator = ({onPageChange: handlePage,pageCount}) => {

    return (
        <div className= "paginate-container">
            <ReactPaginate
                breakLabel="..."
            nextLabel=" "
            onPageChange={handlePage}
            onClick={() => (window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
                }))}
            pageCount={pageCount}
            previousLabel=" "
            renderOnZeroPageCount={null}
            activeLinkClassName="activo-boton"
            disabledLinkClassName="desactivo-boton"
            />
        </div>
);
};

    export default Paginator;
