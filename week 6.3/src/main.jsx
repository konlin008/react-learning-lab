import { createRoot } from 'react-dom/client'
import './index.css'
// import UseMemo from './UseMemo'
import { StrictMode } from 'react'
import UseRef from './UseRef'
// import App from './App.jsx'
// import UseCallback from './UseCallback.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />, */}
    {/* <UseMemo /> */}
    {/* <UseCallback /> */}

    <UseRef />
  </StrictMode>


)
