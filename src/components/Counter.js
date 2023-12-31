import React,{useState} from 'react'

const Counter = () => {

    let [count ,setCount] = useState(0);
    const increment =()=>{
        setCount(count+1);
    }

  return (
    <div className='Counter'>
        <h1>Count: {count} </h1>
        <button onClick={increment} id='incr-cnt'>+</button>
    </div>
  )
}

export default Counter