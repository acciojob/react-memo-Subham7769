import React, { useState } from 'react';
import TodoList from './TodoList';

const Header = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (task.trim() === "") {
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
      <header>
        <h1>My todos</h1>
        <form className="heading" onSubmit={handleSubmit}>
          <input
          id='todoInput'
            type="text"
            placeholder="New Todo"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          /><br/>
          <button type="submit" className="btn" id='add-todo-btn'>
            Add toDo
          </button>
        </form>
      </header>
      <TodoList taskList={taskList} setTaskList={setTaskList} />
      <hr/>
    </>
  );
}

export default Header;
