import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"
import { Navigation } from "../pages/Navigation"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/mapas" element={<Navigate to={"/mapas"} />} />
                <Route path="/Navigation" element={<Navigation></Navigation>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter