import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormWithCustomHook from './02-useEffect/FormWithCustomHook';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormWithCustomHook />
  </StrictMode>,
)
