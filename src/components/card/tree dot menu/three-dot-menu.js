import React from "react"
import {useNavigate} from "react-router-dom"
import {IconButton} from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ThreeDotMenu = ({dropdown,postId,login,toggle}) => {

        let navigate = useNavigate();

        const handleEdit = () => {
            navigate(`/editArticle/${postId}`);
        };

        return (
            <div className={`${login ? "" : "hide"}`}>
                <IconButton onClick={toggle} aria-label="settings">
                    <MoreHorizIcon/>
                </IconButton>
                <div className={`dropdown-menu ${dropdown ? "show" : "hide"}`}>
                    <button
                        onClick={handleEdit}
                        type="button"
                        className="dropdown-item"
                    >
                        <i className="fa-solid fa-pen-to-square"/> Edit
                    </button>
                    <button
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModalCenter-${postId}`}
                        type="button"
                        className="dropdown-item"
                    >
                        <i className="fa-solid fa-trash-can"/> Delete
                    </button>
                </div>
            </div>
        );
    }
    export default ThreeDotMenu;