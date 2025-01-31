import { useState } from "react"

function App() {
  const [todos, setTodos] = useState(
    [{
      title: "wake up",
      des: "6am"
    },
    {
      title: "breakfast",
      des: "6:30 am"
    },
    {
      title: "study",
      des: "7am to 10 am web dev"
    }]
  )

  function updateTodos() {
    setTodos([...todos, {
      title: Math.random(),
      des: Math.random()
    }])
  }
  return (
    <>
      <button onClick={updateTodos}> Add todo</button>
      <RenderTodo todos={todos} />

    </>
  )
}

function RenderTodo({ todos }) {
  return (<>
    {todos.map(function (todo, index) {
      return <div key={index} >
        <h3>TASK: {todo.title}</h3>
        <h5>DESCRIPTION: {todo.des}</h5>
      </div >
    })}
  </>)

}


export default App
