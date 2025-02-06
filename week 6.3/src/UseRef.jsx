import { useEffect, useRef } from "react";

const UseRef = () => {
    const divRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            document.getElementById("taxiiiiiiiii").innerHTML = "1110"
        }, 5000);
    }, [])

    const incomeTax = 20000;

    return (
        <div>
            hi there, your income tax returns are <div id="taxiiiiiiiii" ref={divRef}>{incomeTax}</div>
        </div>
    )
}

export default UseRef