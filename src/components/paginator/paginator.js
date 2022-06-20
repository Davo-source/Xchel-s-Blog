import "./paginator.styles.css"
import ReactPaginate from "react-paginate";
import React from "react";

const Paginator = ({onPageChange: handlePage,pageCount,refToScroll}) => {

    return (
        <div className= "paginate-container mt-5">
            <ReactPaginate
                breakLabel="..."
            nextLabel=" "
            onPageChange={handlePage}
            onClick={() => (window.scrollTo({
                top: refToScroll.current.offsetTop,
                left: refToScroll.current.offsetLeft,
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
