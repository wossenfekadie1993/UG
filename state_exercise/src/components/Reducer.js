import React ,{useReducer} from "react";

function Reducer(){

    const reducer=(state,action)=>{
        switch(action.type){
        case("increment"):
            return {count:state.count+1, 
            isText:state.isText,}
        case("toggleText"):
           return {count:state.count, 
            isText:!state.isText,
        }
        default:
            return state
        }

        }
    
    const [state,dispatch]=useReducer(reducer,{count:0,isText:true})

    return(
        <div>
            <h1>use of reducers </h1>
            <h4>
                {state.count}
            </h4>
            <button
            onClick={()=>{
                dispatch({type:"increment"})
                dispatch({type:"toggleText"})
            }}
            >onclick</button>
            {state.isText && <h4>toggle text</h4>}
        </div>
    )
}
export {Reducer}