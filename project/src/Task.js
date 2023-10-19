import React, { useState } from 'react';

function Task() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h2>Task Board</h2>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>{task}</div>
        ))}
      </div>
    </div>
  );
}

export default Task;
