import React ,{useContext} from "react";
import { UserContext } from "./UseContext";

function Login(){

    const {setUserName}= useContext(UserContext)
    
    return(
        <div>
        <input 
        onChange={(e)=>{setUserName(e.target.value)}}
        type="text"
        placeholder="enter you name"
        />
        </div>

    )
}

export {Login}