import React, {useRef} from "react";



function Start({setUsername}) {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value)
    };

    return (
        <div className="start">
            <input placeholder="ENTER YOUR NAME HERE.."
                   className="startInput"
                   ref={inputRef}
            />
            <button className="startButton" onClick={handleClick}>START</button>
        </div>
    )
}

export default Start;