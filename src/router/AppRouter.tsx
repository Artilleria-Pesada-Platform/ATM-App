import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import { Analisis } from "../pages/Analisis"
import { Cliente } from "../pages/Cliente"
import { Gerencia } from "../pages/Gerencia"
import { LandingPage } from "../pages/LandingPage"
import { Mapas } from "../pages/Mapas"
import { Navigation } from "../pages/Navigation"


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/mapas" element={<Navigate to={"/mapas"} />} />
                <Route path="/Navigation" element={<Navigation></Navigation>}>
                    <Route path="Analisis" element={<Analisis></Analisis>}/>
                    <Route path="Gerencia" element={<Gerencia></Gerencia>}/>
                    <Route path="Cliente" element={<Cliente></Cliente>}/>
                    <Route path="Mapas" element={<Mapas></Mapas>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter