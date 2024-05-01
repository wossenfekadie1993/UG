import React, { useContext } from "react";
import { UserContext } from "./UseContext";


function User(){

const {userName} =useContext(UserContext)
    return(
        <h1>user: {userName} </h1>
    )
}

export {User}