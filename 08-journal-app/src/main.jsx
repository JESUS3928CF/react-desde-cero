import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import JournalApp from './JournalApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*/// El BrowserRouter se pone generalmente en el punto mas alto de nuestra aplicación  */}
        <BrowserRouter>
            <JournalApp />
        </BrowserRouter>
    </React.StrictMode>
);
