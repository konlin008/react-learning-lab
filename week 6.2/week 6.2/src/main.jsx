import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import UseMemoAssign from './UseMemoAssign.jsx'
import UseCllback from './UseCllback.jsx'
// import UseEffect from './UseEffect.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <UseEffect /> */}
    {/* <UseMemoAssign /> */}
    <UseCllback />
  </StrictMode>,
)
