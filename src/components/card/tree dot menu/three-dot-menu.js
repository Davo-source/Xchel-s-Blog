import React from "react"
import {useNavigate} from "react-router-dom"
import {IconButton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ThreeDotMenu = ({dropdown,postId,login,toggle}) => {

        let navigate = useNavigate();

        const handleEdit = () => {
            navigate(`/editArticle/${postId}`);
        };

        return (
            <div className={`dropdownMenu ${login ? "" : "hide"}`}>
                <IconButton onClick={toggle} aria-label="settings">
                    <MoreVertIcon></MoreVertIcon>
                </IconButton>
                <div className={`dropdown-menu ${dropdown ? "show" : ""}`}>
                    <button
                        onClick={handleEdit}
                        type="button"
                        className="dropdown-item"
                    >
                        <i className="fa-solid fa-pen-to-square"></i> Edit
                    </button>
                    <button
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModalCenter-${postId}`}
                        type="button"
                        className="dropdown-item"
                    >
                        <i className="fa-solid fa-trash-can"></i> Delete
                    </button>
                </div>
            </div>
        );
    }
    export default ThreeDotMenu;