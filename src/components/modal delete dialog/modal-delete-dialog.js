import React from "react"
import axios from "axios";
import { ContextGlobal } from "../../Estados/Contexto";
import { useContext } from "react";

    const ModalDeleteDialog = ({postId}) => {
        const { accessToken } = useContext(ContextGlobal);

        const handleDelete = async () => {
            try {
                const res = await axios.delete(
                    "/posts/" + postId,
                    {}
                    ,{
                        headers: {
                            Authorization: `Bearer ${accessToken}`
                        }
                    }
                );
                window.location.replace("/");
                console.log(res.data);
            } catch (err) {
                console.log(err);
            }
        };

        return (
            <div
                className="modal fade"
                id={`exampleModalCenter-${postId}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="false"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                Are you sure?
                            </h5>
                        </div>
                        <div className="modal-body">
                            This will delete all the post content and no undo can be done
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                onClick={handleDelete}
                                type="button"
                                className="btn btn-danger"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    export default ModalDeleteDialog;