import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import React, { Suspense } from "react"
const Landing = React.lazy(() => import("./Components/Landing"))
const Dashboard = React.lazy(() => import('./Components/Dashboard'))

function App() {
  return (
    <>

      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>} />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


function AppBar() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <button onClick={() => {
          navigate('/')
        }}>Home</button>

        <button onClick={() => {
          navigate('/dashboard')
        }}> Dashboard</button>
      </div>
    </>
  )
}
export default App
