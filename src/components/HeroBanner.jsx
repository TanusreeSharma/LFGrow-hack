import React from "react";
import { useNavigate } from "react-router-dom";
import WalletCard from './WalletCard';
const HeroBanner = () => {

    let navigate = useNavigate();
    return (
        <div className="hero-banner">
            <div className="image-container">

                <img src="./images/studying.png" alt="toolbox" width="50" height="100"/>
                
            </div>
            <div className="text-container">
                {/* <p className="heading">Discover Ccientific Knowledge and Stay Connected to the World of Science on Your Own Terms</p> */}
                <div className="login-container">
                    {/* <p></p>
                    <span></span> */}
                    {/* <p className="login-btn" onClick={()=>navigate("/dashboard")}>LOGIN USING METAMASK</p> */}
                    {/* <WalletCard/> */}
                </div>
            </div>
        </div>
    );
}

export default HeroBanner;