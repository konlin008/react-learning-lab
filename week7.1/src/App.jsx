import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { Dashboard } from "./Components/Dashboard"
import { Landing } from "./Components/Landing"

function App() {
  return (
    <>

      <BrowserRouter>
        <AppBar />
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
