import {Route, Routes} from "react-router-dom"
import AuthRoutes from "../auth/routes/AuthRoutes"
import JournalRoutes from "../journal/routes/JournalRoutes"

const AppRouter = () => {
  return (
    <Routes>

        {/*/// Login y Registro,   aca dice que cualquier path que inicie con auth va a cargar el authRoutes */}
        <Route path="/auth/*" element={<AuthRoutes/>}/>


        {/*/// JournalApp,  Cualquier ruta que entre por / va a cargar las rutas de las notas */}
        <Route path="/*" element={<JournalRoutes/>}/>

    </Routes> )
}

export default AppRouter
