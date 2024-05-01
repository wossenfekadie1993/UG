import React, { useEffect, useState } from "react";
import axios from "axios";

function UseEffect() {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response)=>{
        setCount(response.data[10].body)
        // console.log(response)
    })
  },[]
    
)
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export { UseEffect };
