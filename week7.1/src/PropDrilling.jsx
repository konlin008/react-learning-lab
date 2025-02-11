import { useContext, useState } from "react"
import { CountContext } from "./Context"

const PropDrilling = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <CountContext.Provider value={{ count, setCount }}>
                <Count />
            </CountContext.Provider>
        </>
    )
}
function Count() {
    console.log("Count rerednder")
    return (
        <>

            <CountRender />
            <Buttons />
        </>)
}

function CountRender() {
    const { count } = useContext(CountContext)
    return (<>
        <h3>count {count}</h3>
    </>)
}


function Buttons() {
    const { count, setCount } = useContext(CountContext)
    return (<>
        <button onClick={() => {
            setCount(count - 1)
        }}>Decrease</button>
        <button onClick={() => {
            setCount(count + 1)
        }}>Increase</button>

    </>)
}
export default PropDrilling