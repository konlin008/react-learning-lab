import { useState } from "react"

const PropDrilling = () => {
    const [count, SetCount] = useState(0)
    return (
        <>
            <Count count={count} />
            <Buttons count={count} SetCount={SetCount} />
        </>
    )
}
function Count({ count }) {
    return (<>
        <h3>Count is {count}</h3>
    </>)
}
function Buttons({ count, SetCount }) {
    return (<>
        <button onClick={() => {
            SetCount(count + 1)
        }}>Increase</button>
        <button onClick={() => { SetCount(count - 1) }}>Decrease</button>
    </>)
}
export default PropDrilling