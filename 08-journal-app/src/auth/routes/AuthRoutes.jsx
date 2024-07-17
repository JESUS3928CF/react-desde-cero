import { Navigate, Route, Routes } from "react-router"
import LoginPage from "../pages/LoginPage"
import { RegisterPage } from "../pages"

const AuthRoutes = () => {
  return (
    <Routes>

        {/*/// Rutas de nuestras paginas  */}
        <Route path="login" element={<LoginPage/>}/>
        <Route path="register" element={<RegisterPage/>} />


        {/*//- ESTA ES PARA CUANDO ESCRIBEN UNA RUTA QUE NO EXISTE, LO MANDAMOS A OTRO LADO  */}
        <Route path="/*" element={ <Navigate to="/auth/login"/>} />
    </Routes>
  )
}

export default AuthRoutes
