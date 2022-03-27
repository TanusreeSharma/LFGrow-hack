import React from "react";

const DiscoverNft = () => {
    return (
        <div className="discover-nft-container">
            <p><strong>Discover Scientific Knowledge and Stay Connected to World of Science on Your Own Terms</strong></p>

            <div className="discover-tracking-trading-container">
                <div className="discover-container container">
                  
                    <p><strong>Connect with your scientific community</strong></p>
Share your research, collaborate with your peers, and get the support you need to advance your career.
                    <div className="image-container">
                <img src="./images/world-globe.png" alt="toolbox" width="200" height="200"/>
            </div>
                 
                </div>
                <div className="tracking-container container">
                <p><strong>Measure your impact in research community</strong></p>
Get in-depth stats on who's been reading your work and keep track of your citations with non transferrable NFT badges with skill level.
                    <div className="image-container">
                <img src="./images/toolbox.png" alt="impact" width="200" height="200"/>
            </div>
                    
                </div>
                <div className="trading-container container">
                <p><strong>Visit Topic Pages add People in your circle</strong></p>
                Access million of publications and stay up to date with what's happening in your field. Add people in your personalized circle.
                    <div className="image-container">
                <img src="./images/communities.png" alt="impact" width="200" height="200"/>
            </div>
                </div>
            </div>
        </div>
    );
}

export default DiscoverNft;