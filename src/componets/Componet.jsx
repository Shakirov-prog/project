import React, {useState} from "react";

const Componet = function (){
    const [count, likes] = useState(0)
  
    function incriment(){
        likes(count + 1)
    }
  
    function dincriment(){
        likes(count - 1)
  }
    return(
    <div>
        
        <h1>{count}</h1>
        <button onClick={incriment}>like</button>
        <button onClick={dincriment}>dislike</button>
    
    </div>
    )
};

export default Componet;