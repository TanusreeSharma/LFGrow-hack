import React from "react";
import Ripples from "react-ripples";

const TabNavigation = ({ handleMyNFTCollection, handleMyNFTWatchlist, handleNFTCollection, activeTab }) => {
    let myNftCollectionClassName = "tab-list-item my-nft-collection";
    let myNftWatchlistClassName = "tab-list-item my-nft-watchlis";
    let nftCollectionClassName = "tab-list-item  nft-collection";

    if (activeTab === "MY_NFT_COLLECTION") {
        myNftCollectionClassName += " active";
    }
    if (activeTab === "NFT_WATCHLIST") {
        myNftWatchlistClassName += " active";
    }
    if (activeTab === "NFT_COLLECTION") {
        nftCollectionClassName += " active";
    }

    return (
        <div className="tab-navigation">
            <ul className="tab-list">
                <Ripples>
                    <button className={myNftCollectionClassName} onClick={handleMyNFTCollection}>
                        My Research Collection
                    </button>
                </Ripples>

                <Ripples>
                    <button className={myNftWatchlistClassName} onClick={handleMyNFTWatchlist}>
                     Popular Research List
                    </button>
                </Ripples>

                <Ripples>
                    <button className={nftCollectionClassName} onClick={handleNFTCollection}>
                        Researchers in Social Community
                    </button>
                </Ripples>
            </ul>
        </div>
    );
};

export default TabNavigation;
