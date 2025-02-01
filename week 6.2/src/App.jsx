import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {
  const [ids, setIds] = useState(null)

  function handelClick(clickedIds) {
    setIds(clickedIds)
  }
  return (
    <>
      <button onClick={() => handelClick(1)}>1</button>
      <button onClick={() => handelClick(2)}>2</button>
      <button onClick={() => handelClick(3)}>3</button>
      <button onClick={() => handelClick(4)}>4</button>
      <button onClick={() => handelClick(5)}>5</button>
      <h1>id : {ids}</h1>
      <Todo id={ids} />
    </>
  )
}


function Todo({ id }) {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos/?id=${id}`)
      .then((res) => {
        setTodo(res.data)
      })
  }, [id])


  return (
    <div>
      <h1>Task : {todo.title} </h1>
      <h3>Check : {todo.completed ? "Completed" : "Not Completed"}</h3>
    </div>
  )
}

export default App