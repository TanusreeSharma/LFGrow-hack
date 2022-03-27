import React from "react";

const Modal = ({handleCloseClick}) => {
    return (
        <div className="modal">
            <div className="modal-image-container">
                <span className="modal-close" onClick={handleCloseClick}>x</span>
                <img src="./images/img-m.jpeg" alt="image"/>
            </div>
        </div>
    );
}

export default Modal;