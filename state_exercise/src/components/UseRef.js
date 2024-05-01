import React ,{useRef,useState} from "react";

function UseRef(){
    const inputRef=useRef(null)
    const [name,setName]=useState("first name")

    const handleClick=()=>{
        // console.log(inputRef.current.value)
        setName(inputRef.current.value)
        inputRef.current.value=""
        inputRef.current.focus()
    }


    return (
        <div>
            <h1>{name}</h1>
            <input placeholder="first name..." type="text" ref={inputRef}/>
            <button onClick={handleClick}>change name</button>
        </div>
    )
}
export {UseRef}