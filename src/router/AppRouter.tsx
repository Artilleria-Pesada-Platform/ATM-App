import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { LandingPage } from "../pages/LandingPage"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter