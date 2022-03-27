import React from "react";
import DiscoverNft from "../components/DiscoverNft";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";

const Homepage = () => {
    return (
        <>
            <Navbar/>
            <HeroBanner/>
            <DiscoverNft />
            <Footer/>
        </>
    );
}

export default Homepage;