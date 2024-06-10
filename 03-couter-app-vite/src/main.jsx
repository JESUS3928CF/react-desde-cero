import React from 'react' //- imr esto importa react rápidamente
import ReactDOM from 'react-dom/client';


import './index.css'
import { CounterApp } from './CounterApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={ 123 }/>
    </React.StrictMode>
);