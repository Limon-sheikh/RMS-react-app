import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer} from 'react-toastify';//import toast
import 'react-toastify/dist/ReactToastify.css';//import toast css

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer position="top-center" /> 
    <App />
  </StrictMode>,
)
