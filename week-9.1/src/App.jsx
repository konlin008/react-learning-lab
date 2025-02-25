import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      setTime(false)
    }, 10000)
  }, [])

  return (
    <>
      {time ? <MyComponent /> : <div></div>}
    </>
  )
}

export default App
function MyComponent() {

  return (
    <>
      component returnd
    </>

  )
}

