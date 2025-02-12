import { useCallback, useState } from "react"
import { RecoilRoot, useRecoilState } from "recoil"

function App() {
  return (

    <>
      <RecoilRoot>
        <TodoInputs />
      </RecoilRoot>
    </>

  )
}

function TodoInputs() {
  const [inputTitle, setInputTitle] = useState("")
  const [inputDescription, setInputDescription] = useState("")
  const [todos, setTodos] = useRecoilState(todos)
  const updateTodo = useCallback(() => {
    setTodos([...todos, { title: inputTitle, description: inputDescription }])
    setInputTitle("")
    setInputDescription("")
  }, [inputTitle, inputDescription]
  )
  return (
    <div>
      <input type="text" placeholder="Todo Title" onChange={(e) => {
        setInputTitle(e.target.value)
      }} />
      <br />
      <br />

      <input type="text" placeholder="Todo Description" onChange={(e) => {
        setInputDescription(e.target.value)
      }} />
      <br />
      <br />

      <button onClick={updateTodo}> Submit </button>
    </div>
  )

}

export default App
