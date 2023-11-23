import React from 'react'

const MemoList = (props) => {
let taskList = props.taskList;
    
  return (
    <main>
        <ul>
        {taskList.length === 0
          ? ""
          : taskList.map((taskName, index) => (
              <li key={index} className='listItem' id={index}>
                {taskName} 
               
              </li>
            ))}
      </ul>
    </main>
  )
}

export default MemoList