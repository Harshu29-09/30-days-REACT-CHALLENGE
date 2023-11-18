import React, { useState } from 'react';
import './ToDolist.css'

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task === "") {
      alert("Please enter a task!");
      return;
    }

    setTasks([...tasks, task]);
    setTask('');
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          id="taskInput"
          placeholder="Add new task..."
          value={task}
          onChange={handleTaskChange}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul id="taskList">
        {tasks.map((task, index) => (
          <li>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;