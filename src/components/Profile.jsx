import React from "react";
import { useNavigate } from "react-router-dom";
const Profile = () => {

    let navigate = useNavigate();
    
    return (
        <div className="profile-section">
            <div className="profile-photo-section">
                <img src="./images/account-head.png" alt="account picture" />
            </div>
            <div className="profile-info-section">
                <div>
                    <span className="me-badge">Me</span>
                    <span className="id-lg">0xf903672195F12a02b8fB5fC03E9E3421D13b5458</span>
                </div>
                <span className="id-sm">0xf903672195F12a02b8fB5fC03E9E3421D13b5458</span>
                <div className="profile-banner">
            <div className="image-container">

                <img src="./images/b.png" alt="badge" width="100" height="100"/>
                
            </div>
            <div className="text-container">
                {/* <p className="heading">Discover Ccientific Knowledge and Stay Connected to the World of Science on Your Own Terms</p> */}
                <div className="login-container">
                    
                    <p></p>
                    <span></span> 
                     <p className="login-btn" onClick={()=>navigate("/dashboard")}> <button> <a class="" href="https://litgateway.com/files" target="_blank">Mint Paper as NFT</a></button></p>
                </div>
            </div>
        </div>
                
                 
                </div>
                </div>
         
      
    );
};

export default Profile;
