import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {CartProvider} from './components/cartProvider';
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> 
      <App />
    </CartProvider>
   
  </StrictMode>,
)
