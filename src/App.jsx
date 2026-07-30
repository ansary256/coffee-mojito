import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavbarContainer from "./Component/Navbar/NavbarContainer";

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeContainer from "./Component/Home/HomeContainer";
import AboutUsContainer from "./Component/AboutUs/AboutUsContainer";
import ConnectUsContainer from "./Component/ConnectUs/ConnectUsContainer";
import ScrollToTop from "./ScrollToTop";
import DrinksContainer from "./Component/Drinks/DrinksContainer";
import { CartProvider } from "./Contexts/CartContext";
import FoodsContainer from "./Component/Foods/FoodsContainer";


gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <ScrollToTop />
                <NavbarContainer />
                <Routes>
                    <Route path="/" element={<Navigate to="/Home" replace />} />

                    <Route path="/Home" element={<HomeContainer />} />

                    <Route path="/about" element={<AboutUsContainer />} />

                    <Route path="/contact" element={<ConnectUsContainer />} />

                    <Route path="/cocktails" element={<DrinksContainer />} />

                    <Route path="/Foods" element={<FoodsContainer />} />
                </Routes>
            </BrowserRouter>
        </CartProvider>
    )
}
export default App;