import { useState } from "react"

function App() {
  return (
    <div>
      <HeaderWithButton></HeaderWithButton>
      <Header title="This is header 2" />

    </div>
  )
}

function HeaderWithButton() {
  let [name, setName] = useState("Aman")



  function changeName() {
    setName(Math.random())
  }

  return <>
    <Header title={`My name is ${name}`} />
    <button onClick={changeName}> Change Name</button>
  </>
}

function Header({ title }) {
  return <>
    <h1>{title}</h1>
  </>
}

export default App
