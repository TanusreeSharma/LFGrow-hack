import React, { useState } from "react";
import Navbar from "../components/Navbar";
import TabNavigation from "../components/TabNavigation";
import MyNFTCollection from "../components/MyNFTCollection";
import MyNFTWatchlist from "../components/MyNFTWatchlist";
import NFTCollection from "../components/NFTCollection";
import Profile from "../components/Profile";

const Dashbaord = () => {
    const [myNftCollection, setMyNftCollection] = useState(true);
    const [myNftWatchlist, setMyNftWatchlist] = useState(false);
    const [nftCollection, setNftCollection] = useState(false);

    const [activeTab, setActiveTab] = useState("MY_NFT_COLLECTION");

    const handleMyNFTCollection = () => {
        setMyNftCollection(true);
        setMyNftWatchlist(false);
        setNftCollection(false);
        setActiveTab("MY_NFT_COLLECTION");
    };

    const handleMyNFTWatchlist = () => {
        setMyNftWatchlist(true);
        setMyNftCollection(false);
        setNftCollection(false);
        setActiveTab("NFT_WATCHLIST");
    };

    const handleNFTCollection = () => {
        setNftCollection(true);
        setMyNftCollection(false);
        setMyNftWatchlist(false);
        setActiveTab("NFT_COLLECTION");
    };

    return (
        <>
            <Navbar isLoggedIn={true} />
            <div className="dashboard-container">
                <Profile />
                <TabNavigation handleMyNFTCollection={handleMyNFTCollection} handleMyNFTWatchlist={handleMyNFTWatchlist} handleNFTCollection={handleNFTCollection} activeTab={activeTab} />

                {myNftCollection ? <MyNFTCollection /> : null}
                {myNftWatchlist ? <MyNFTWatchlist /> : null}
                {nftCollection ? <NFTCollection /> : null}
            </div>
        </>
    );
};

export default Dashbaord;
