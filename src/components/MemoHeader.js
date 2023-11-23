import React, { useState } from 'react';
import MemoList from './MemoList';

const MemoHeader = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") {
        return;
    }
    else if(task.length<=5){
      alert('Length should be minimum 5 Characters')
      setTask("");
      return;
    }
    else{

      let newTask = task;
      setTaskList((taskList) => [...taskList, newTask]);
      console.log(taskList);
      setTask("");
    }
  }

  return (
    <>
      <header >
        <h1>React.memo</h1>
        <form className="memo" onSubmit={handleSubmit} >
          <input
            type="text"
            placeholder="New Skill"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          /><br/>
          <button type="submit" className="btn">
            Add Skills
          </button>
        </form>
      </header>
      <MemoList taskList={taskList}/>
      <hr/>
    </>
  );
}

export default MemoHeader;
