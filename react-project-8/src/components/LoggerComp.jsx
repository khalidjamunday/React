import React, { useState, useEffect } from 'react';


const LoggerComp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // dekho kaise , se seprate kri h console.log m values    
        console.log("Component rendered or count changed :", count);
    });
    
    return (
        <div>
            <h1>Count : {count}</h1>
            {/* handleClick ki jgh arrow fx pass krdiya */}
            <button onClick={()=> setCount(count + 1)}> 
                Increment
            </button>
        </div>
    )
}

export default LoggerComp