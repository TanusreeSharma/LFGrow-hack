import React from "react";

const NFTTestComponent = ({ handleCompareClick }) => {
    return (
        <div className="nft-test-container">
            <div className="image-container">
            <p>Sharma, T., & Bashir, M. (2020). Use of apps in the COVID-19 response and the loss of privacy protection. Nature Medicine, 26(8), 1165-1167.</p>
            </div>
            <div className="description-container">
                <h3>Description</h3>
                <p> </p>
                <p className="compare" onClick={handleCompareClick}>
                   Access
                </p>
            </div>
        </div>
    );
};

export default NFTTestComponent;
