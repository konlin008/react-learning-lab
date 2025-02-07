import { useEffect, useRef, useState } from "react";

// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

export function Assignment1() {
    const handelClick = useRef(null)
    useEffect(() => {
        handelClick.current.focus()
    }, [handelClick]);

    const handleButtonClick = () => {
        handelClick.current.focus()
    };

    return (
        <div>
            <input ref={handelClick} type="text" placeholder="Enter text here" />
            <button onClick={handleButtonClick}>Focus Input</button>
        </div>
    );
}
