import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/// Importar el contexto   */
import { ApiProvider } from "@reduxjs/toolkit/query/react"
import { apiSlice } from './api/apiSlice.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>

      {/*/// habilitar el contexto y le pasamos el slice de rpk query que queremos habilitar */}
        <ApiProvider api={apiSlice}>
            <App />
        </ApiProvider>
    </React.StrictMode>
);
