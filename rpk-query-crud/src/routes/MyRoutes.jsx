import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from '../pages/Todo';
import TodoConfig from '../pages/TodoConfig';
const MyRoutes = () => {
    /// Retornamos nuestras rutas
    return (
        <BrowserRouter>
            <Routes>
                {/*Haciendo este elemento la pagina principal */}
                <Route exact path='/' element={<Todo />}></Route>
                <Route exact path='/config' element={<TodoConfig />}></Route>
            </Routes>
        </BrowserRouter>
    );
};
export default MyRoutes;
