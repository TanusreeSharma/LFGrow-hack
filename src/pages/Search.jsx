import React from "react";
import Navbar from "../components/Navbar";
const Search = () => {
    return (
        <>
            <Navbar isLoggedIn={true} />
            <div className="container">
                <h3>Search</h3>
                <div className="input-field-container">
                    <input type="text" placeholder="Enter Text related to your research search" />

                    <div className="search-dropdown">
                        <select name="types" id="types">
                            <option value="nft_text_search">Search by Author Name</option>
                            <option value="image_search_by_url">Search by Research Topic</option>
                            <option value="nft_counterfeit_detection">Search by Research Paper</option>
                            <option value="user_account">User Account</option>
                        </select>
                    </div>
                    <p className="search-btn"><a class="" href="https://www-engineeringvillage-com.proxy2.library.illinois.edu/search/quick.url?SEARCHID=d627ec4d841746628a50d8c194a1c992&COUNT=1&usageOrigin=&usageZone=" target="_blank">S</a></p>
                    

                   
                </div>
            </div>
        </>
    );
};

export default Search;
