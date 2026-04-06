import React from 'react'
import Child from "./Child";
const Parent = () => {
    const fullname="PRASHANT MISHRA";
    function Alert(){
        alert("Button clicked");
    }
  return (
    <>
    <div>Parent</div>
    <h1>Rendered in Parent Component:{fullname}</h1>
    <Child name={fullname} alert={Alert}/>
    </>
  )
}

export default Parent
