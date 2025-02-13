import { useCallback, useState } from "react"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { todosAtom } from "./store/atoms/Atoms"
import { FilterTodoAtoms } from "./store/atoms/FilterAtoms"
import { filterTodos } from "./store/selector/FilterSelector"


function App() {
  return (

    <>
      <RecoilRoot>
        <TodoInputs />
        <FilterTodos />
        <TodoRender />
      </RecoilRoot>
    </>

  )
}

function TodoInputs() {
  const [inputTitle, setInputTitle] = useState("")
  const [inputDescription, setInputDescription] = useState("")
  const [todos, setTodos] = useRecoilState(todosAtom)
  const updateTodo = useCallback(() => {
    setTodos([...todos, { title: inputTitle, description: inputDescription }])
    setInputTitle("")
    setInputDescription("")
  }, [inputTitle, inputDescription, setTodos]
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
      <br />
      <br /> <br />
      <br />
    </div>
  )

}

function FilterTodos() {
  const [inputFilter, setInputFilter] = useState('')
  const SetFilterTodo = useSetRecoilState(FilterTodoAtoms)
  function searchFilterdTodos() {
    SetFilterTodo(inputFilter)
  }
  function clearFilter() {
    SetFilterTodo('')
  }
  return (
    <div>
      <input type="text" placeholder="Search todos" onChange={(e) => {
        setInputFilter(e.target.value)
      }} />

      <button onClick={searchFilterdTodos} style={{ marginRight: '20px' }}>Search</button>
      <button onClick={clearFilter}>Clear Filter</button>
    </div>
  )
}

function TodoRender() {
  const todos = useRecoilValue(filterTodos)
  return (
    <div>
      <h1>Todo Lists</h1>
      {todos.map((todo, index) => {
        return (
          <div key={index}>

            <h3>Title: {todo.title}</h3>
            <h3>Details: {todo.description}</h3>

          </div>
        )
      })}
    </div>
  )
}




export default App
