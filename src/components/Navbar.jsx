import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import WalletCard from './WalletCard';
const Navbar = ({ isLoggedIn = false }) => {
    let navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-nav">
                <Logo />
                
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/search">Discover Research</Link>
                    </li>
            
                    <li className="nav-item">
                
    
                        {/* <Link to="/Research Profile">  <WalletCard/> </Link> */}
                        <div className="login-container">
            
                        <p className="login-btn" onClick={()=>navigate("/dashboard")}> <WalletCard/> </p>
                   
                </div>
                    </li>

                    <div className="dropdown">
                    <select name="types" id="types">
                        <option value="ethereum_mainenet">Ethereum Mainenet</option>
                        <option value="ropsten_Testnet">Ropsten Testnet</option>
                        <option value="rinkeby_Testnet">Rinkeby Testnet</option>
                        <option value="polygon_Mainnet">Polygon Mainnet</option>
                    </select>
                </div>
                  

                    {isLoggedIn ? (
                        <li className="nav-item" onClick={() => navigate("/")}>
                            Logout
                        </li>
                        
                    ) : null}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
