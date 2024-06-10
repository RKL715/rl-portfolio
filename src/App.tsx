import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Home from "./pages/Home/Home.tsx";
// import ProjetDetails from "./pages/ProjetDetails/ProjetDetails.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import "./styles/main.css";



function App() {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App