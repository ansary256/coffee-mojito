import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavbarContainer from "./Component/Navbar/NavbarContainer";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeContainer from "./Component/Home/HomeContainer";
import AboutUsContainer from "./Component/AboutUs/AboutUsContainer";
import ConnectUsContainer from "./Component/ConnectUs/ConnectUsContainer";


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <BrowserRouter>
            <NavbarContainer />
            <Routes>
                <Route path="/" element={<Navigate to="/Home" replace />} />

                <Route path="/Home" element={<HomeContainer />} />

                <Route path="/about" element={<AboutUsContainer />} />

                <Route path="/contact" element={<ConnectUsContainer />} />

            </Routes>
        </BrowserRouter>
    )
}
export default App;