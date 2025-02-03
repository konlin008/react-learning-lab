import { useMemo, useState } from "react"

const UseMemoAssign = () => {
    const [counter, setCounter] = useState(0)
    const [num, setNum] = useState(0)
    // const [sum, setSum] = useState(0);  // Separate state for sum

    let calculateSum = useMemo(() => {
        console.log("Memo got called");


        let total = 0;
        for (let i = 0; i <= num; i++) {

            total += i;
        }
        return total
    }, [num])


    return (
        <div>
            <input type="text" placeholder="Enter Number" onChange={(e) => setNum(e.target.value)} />
            <h3>Answer is : {calculateSum} </h3>
            <button onClick={() => { setCounter(counter + 1) }}>{counter}</button>


        </div>
    )
}

export default UseMemoAssign