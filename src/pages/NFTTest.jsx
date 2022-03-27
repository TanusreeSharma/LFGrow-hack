import React, { useState } from "react";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import NFTTestComponent from "../components/NFTTestComponent";

const NFTTest = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCompareClick = () => {
        setShowModal(true);
    };

    const handleCloseClick = () => {
        setShowModal(false);
    };
    return (
        <>
            <Navbar isLoggedIn={true} />
            <div className="container">
                <NFTTestComponent handleCompareClick={handleCompareClick} />
                {showModal ? <Modal handleCloseClick={handleCloseClick} /> : null}
            </div>
        </>
    );
};

export default NFTTest;
