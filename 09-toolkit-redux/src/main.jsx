import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

/// Hacer disponible nuestro store o fuente de la verdad
import { Provider } from 'react-redux'
import { store } from './store/store'
import TodoApp from './TodoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* /// Asi lo hacemos disponible de manera global en toda nuestra app */}
        <Provider store={store}>
            <TodoApp />
        </Provider>
    </React.StrictMode>
);
