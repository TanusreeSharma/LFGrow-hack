import React from "react";
import Items from "./Items";

const NFTCollection = () => {
        return (
        <>
        <h3>Research community</h3>
        <div className="discover-tracking-trading-container">
                <div className="discover-container container">
                  
                    <p><strong>Usable Security and Privacy</strong></p>
This community includes researchers and research topic who are working on the topic related privacy, secuirty and data ethics. 
                    <div className="image-container">
                <img src="./images/digital-signature.png" alt="toolbox" width="200" height="200"/>
            </div>
                 
                </div>
                <div className="tracking-container container">
                <p><strong>Human Computer Interaction</strong></p>
This community involves works on users experience research with various emerging technologies
                    <div className="image-container">
                <img src="./images/teamwork.png" alt="impact" width="200" height="200"/>
            </div>
                    
                </div>
                <div className="trading-container container">
                <p><strong>Web3 Research</strong></p>
                This community involves researhes related to web3 platforms and blockchain to improve and engage broader audieance.
                    <div className="image-container">
                <img src="./images/object.png" alt="impact" width="200" height="200"/>
            </div>
                </div>
            </div>
        
        </>
    );
}

export default NFTCollection;