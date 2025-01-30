import React, { useState } from "react"

const Memo = () => {
    const [name, setName] = useState("Aman")
    return (
        <div>
            <Header title={`My Name is ${name}`} />
            <Header title="My Name is ad" />
            <Header title="My Name is anisdjcdbx" />
            <Header title="My Name is anhdgassd" />
            <Header title="My Name is ani" />
            <button onClick={changeName}>Change Name </button>
        </div>
    )
    function changeName() {
        setName(Math.random())
    }

}

const Header = React.memo(function Header({ title }) {
    return <>
        <h1>{title}</h1>
    </>
})

export default Memo