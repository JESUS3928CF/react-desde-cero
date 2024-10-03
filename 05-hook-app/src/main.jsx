import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CounterWithCustomHook from './01-useState/CounterWithCustomHook';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterWithCustomHook />
  </StrictMode>,
)
