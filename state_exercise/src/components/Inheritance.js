import React ,{useRef} from "react";
import { Button } from "./Button";

function Inherited(){
 const buttonref=useRef(null)

    return(
        <>
        <button onClick={()=>{buttonref.current.alterToggle()}}>reset parent</button>
        <Button ref={buttonref}/>
        </>
    )
}
export {Inherited}