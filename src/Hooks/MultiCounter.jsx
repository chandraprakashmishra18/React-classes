// import React from 'react'

// // const MultiCounter = () => {
// //     const[count,setCount] = useState(0)
// //     const[num,setNum] = useState(0);

// //   return (
// //     <>
// //     <div>
// //       MultiCounter
// //     </div>
// //     <button onClick={()=>setCount(count+1)}>Count</button>
// //     <button onClick={()=>setNum(num+1)}>Count 2 </button>
// //     </>
// //   )
// // }
import React from 'react'
import { useState } from 'react';

const Function = () => {

  const[count,setCount]   =  useState([0,0,0,0])
  
  const increment=(index)=>{
    setCount((prevCount)=>{
      const newCount = [...prevCount]
      console.log(newCount);
      newCount[index] += 1
      return newCount
    })
  }
  const decrement=(index)=>{
    setCount((prevCount)=>{
      const newCount = [...prevCount]
      newCount[index] -= 1
      return newCount
    })
  }

  console.log(count)
return (
  <div>
    {count.map((counter,index)=>(
      <div key={index}>
      <h1> count:{counter}</h1>
      <button onClick={()=>increment(index)}>increment</button>
      <button onClick={()=>decrement(index)}>decrement</button>
      </div>
))}
  </div>
)
}