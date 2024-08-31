import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClickerProvider } from './context/ClickerContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickerProvider>
      <App />
    </ClickerProvider>
  </StrictMode>,
)
