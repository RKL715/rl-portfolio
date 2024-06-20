import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header.tsx";
import Home from "./pages/Home/Home.tsx";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import LegalTerms from "./pages/Legal/Legal.tsx";
import "./styles/main.css";




function App() {

    return (
        <BrowserRouter>
            <div className="frame">
            <Header />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/legalterms" element={<LegalTerms />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App