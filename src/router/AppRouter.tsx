import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Pagina />} />
                <Route path="/" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter