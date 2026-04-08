import React, { useState } from 'react'

const UseStateOne = () => {
    const [count,setCount] = useState(0)
    console.log("count",count)
    // 0
    
    function increase(){
        // setCount(count+1);
        setCount((prev)=>prev+1)
    }
    function decrease(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }
  return (
    <>
    <div>UseStateOne</div>
    <h1>Count: {count}</h1>
    <button onClick={increase}>Click</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={reset}>Reset</button>
    </>
  )
}

export default UseStateOne
