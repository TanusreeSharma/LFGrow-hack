import React from "react";
import { useNavigate } from "react-router-dom";

const Item = () => {
    const navigate = useNavigate();
    return (
        <div className="nft-item">
            <div className="image">
                {/* <img src="./images/img-m.jpeg" alt="image" /> */}
                
                <p>Sharma, T., & Bashir, M. (2020). Use of apps in the COVID-19 response and the loss of privacy protection. Nature Medicine, 26(8), 1165-1167.</p>
                <button
                    className="item-btn"
                    onClick={() => {
                        navigate("/nfttest");
                    }}
                >
                    visit
                </button>
            </div>
            {/* <div className="description">
                <h3></h3>
                <p>Sharma, T., & Bashir, M. (2020). Use of apps in the COVID-19 response and the loss of privacy protection. Nature Medicine, 26(8), 1165-1167. <a class="quickLink" href="https://drive.google.com/file/d/1wlf5oj7SNoBenc7GOMKj_dmE0SsjMRn5/view"Paper></a></p>
                <button
                    className="item-btn"
                    onClick={() => {
                        navigate("/nfttest");
                    }}
                >
                    visit
                </button>
            </div> */}
        </div>
    );
};

export default Item;
