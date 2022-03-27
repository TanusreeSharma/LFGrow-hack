import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashbaord from "./pages/Dashboard";
import Homepage from "./pages/Homepage";
import NFTTest from "./pages/NFTTest";
import Search from "./pages/Search";
import Error from "./pages/Error";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/dashboard" element={<Dashbaord />} />
                    <Route path="/nfttest" element={<NFTTest />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
