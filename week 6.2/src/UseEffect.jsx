import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


const UseEffect = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((res) => {
                setTodos(res.data)
            })
            .catch((err) => {
                console.log(err);

            })
    }, [])

    return (
        <>
            {todos.map((todo) =>
                (<Todo key={todo.id} title={todo.title} check={todo.completed} />)

            )}
        </>

    )
}

function Todo({ title, check }) {
    return <div>
        <h1> Task : {title}</h1>
        <h2> check : {check ? "Completed" : "Not Completed"}</h2>
    </div>
}

export default UseEffect