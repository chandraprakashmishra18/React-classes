import React from 'react'

const MultiCounter = () => {
    const[count,setCount] = useState(0)
    const[num,setNum] = useState(0);

  return (
    <>
    <div>
      MultiCounter
    </div>
    <button onClick={()=>setCount(count+1)}>Count</button>
    <button onClick={()=>setNum(num+1)}>Count 2 </button>
    </>
  )
}

export default MultiCounter
